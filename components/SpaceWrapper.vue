<template>
    <div class="relative bg-gray-900 py-20 sm:py-32">
        <canvas ref="canvasRef" class="absolute top-0 left-0 w-[100%] h-[100%]"></canvas>
        <slot />
    </div>
</template>

<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement>();
let canvas: any = null;
let ctx: any = null;;

onMounted(() => {
    setTimeout(() => {
        if(canvasRef.value)
        {
            console.log('canvas ref');
            console.log(canvasRef.value);
            canvas = canvasRef.value;
            console.log('canvas');
            console.log(canvas);

            if(canvas)
            {
                ctx = canvas.getContext("2d");
                window.addEventListener("resize", resizeCanvas);
                // Initialize
                resizeCanvas();
                createStars();
                setTimeout(createShootingStar, Math.random() * 10000 + 10000); // Rare shooting stars
                animate();
            }
        }
    }, 10);
});


// watch(canvasRef, () => {
//     if(canvasRef.value)
//     {
//         canvas = canvasRef.value;
//         if(canvas)
//         {
//             ctx = canvas.getContext("2d");
//             window.addEventListener("resize", resizeCanvas);
//             // Initialize
//             resizeCanvas();
//             createStars();
//             setTimeout(createShootingStar, Math.random() * 20000 + 20000); // Rare shooting stars
//             animate();
//         }
//     }
// })

let stars: any = [];
const layerCount = 3; // 3 layers for parallax
const speeds = [0.015, -0.01, -0.02]; // Slower speeds for distant stars
const baseStarCount = 100; // Base count of stars per layer
let shootingStar: any = null;

// Resize the canvas
function resizeCanvas() {
    if(canvas){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    createStars(); // Recreate stars based on new dimensions
}

// Create the starfield
function createStars() {
    stars = [];
    const scalingFactor = Math.max(canvas?.width, canvas?.height) / 1100; // Scale star count
    for (let i = 0; i < layerCount; i++) {
        const starCount = Math.floor(baseStarCount * scalingFactor * (i + 1));
        for (let j = 0; j < starCount; j++) {
        stars.push({
            x: Math.random() * canvas?.width,
            y: Math.random() * canvas?.height,
            size: Math.random() * (i + 0.1) + 0.1, // Larger stars for closer layers
            speed: speeds[i],
            opacity: Math.random(),
            baseOpacity: Math.random() * 0.5 + 0.5, // Base opacity for twinkling
            layer: i, // Track which layer the star belongs to
        });
        }
    }
}

// Update star positions and simulate twinkling
function updateStars() {
    stars.forEach((star: any) => {
        star.y -= star.speed; // All stars move upward
        star.opacity =
        star.baseOpacity + Math.sin(Date.now() * 0.001 * star.speed) * 0.3; // Smooth twinkle
    
        // Reset star position when it goes off-screen
        if (star.speed < 0) {
        if (star.y > canvas?.height) {
            star.y = 0;
            star.x = Math.random() * canvas?.width;
        }
        } else {
        if (star.y < 0) {
            star.y = canvas?.height;
            star.x = Math.random() * canvas?.width;
        }
        }
    });
}

// Draw the stars
function drawStars() {
    ctx.clearRect(0, 0, canvas?.width, canvas?.height);
    
    // Add a dark radial blur gradient background
    const gradient = ctx.createRadialGradient(
        canvas?.width / .75,
        canvas?.height / 2,
        canvas?.width / 8, // Start small for a blur effect
        canvas?.width / 2,
        canvas?.height / 16,
        canvas?.width // Expand to the edges
    );
    gradient.addColorStop(0, "rgba(1, 10, 8, 1)"); // Deep dark blue at the center
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)"); // Black at the edges
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas?.width, canvas?.height);
    
    // Draw stars with parallax effect
    stars.forEach((star: any) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
    });
}

// Initialize a shooting star
function createShootingStar() {
    const startX = Math.random() * canvas?.width;
    const startY = Math.random() * canvas?.height;
    const angle = Math.random() * Math.PI * 2; // Random direction
    const length = Math.random() * 300 + 100; // Random trail length
    const speed = Math.random() * 4 + 2;
    
    shootingStar = {
        x: startX,
        y: startY,
        length: length,
        speed: speed,
        opacity: 1,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
    };
    
    // Schedule the next shooting star
    const nextAppearance = Math.random() * 8000 + 8000;
    setTimeout(createShootingStar, nextAppearance);
}

// Update shooting star position
function updateShootingStar() {
    if (!shootingStar) return;
    
    shootingStar.x += shootingStar.dx;
    shootingStar.y += shootingStar.dy;
    shootingStar.opacity -= 0.01;
    
    if (
        shootingStar.opacity <= 0 ||
        shootingStar.x < 0 ||
        shootingStar.x > canvas?.width ||
        shootingStar.y < 0 ||
        shootingStar.y > canvas?.height
    ) {
        shootingStar = null; // Remove shooting star
    }
}

// Draw the shooting star
function drawShootingStar() {
    if (!shootingStar) return;
    
    const gradient = ctx.createLinearGradient(
        shootingStar.x,
        shootingStar.y,
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length
    );
    gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
    gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
    
    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.moveTo(shootingStar.x, shootingStar.y);
    ctx.lineTo(
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length
    );
    ctx.stroke();
    ctx.closePath();
}

// Animation loop
function animate() {
    updateStars();
    updateShootingStar();
    drawStars();
    drawShootingStar();
    requestAnimationFrame(animate);
}
</script>