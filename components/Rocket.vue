<template>
    <div  :class="['rocket zoomInUp', { hyperspeed }]">
        <div class="rocket-body">
            <div class="body"></div>
            <div class="fin fin-left"></div>
            <div class="fin fin-right"></div>
            <div class="window"></div>
        </div>
        <div class="exhaust-flame"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  hyperspeed: boolean
}>();

</script>

<style scoped>
 .rocket {
	 position: absolute;
	 top: 20%;
	 width: 80px;
	 left: calc(60%);
	 z-index: 10;
	 transition: all .5s ease-in-out;
}
 .rocket .rocket-body {
	 width: 80px;
	 left: calc(50% - 50px);
	 animation: bounce 0.5s infinite;
}
 .rocket .rocket-body .body {
	 background-color: #dadada;
	 height: 180px;
	 left: calc(50% - 50px);
	 border-top-right-radius: 100%;
	 border-top-left-radius: 100%;
	 border-bottom-left-radius: 50%;
	 border-bottom-right-radius: 50%;
	 border-top: 5px solid #f5f5f5;
}
 .rocket .rocket-body:before {
	 content: '';
	 position: absolute;
	 left: calc(50% - 24px);
	 width: 48px;
	 height: 13px;
	 background-color: #554842;
	 bottom: -13px;
	 border-bottom-right-radius: 60%;
	 border-bottom-left-radius: 60%;
}
 .rocket .window {
	 position: absolute;
	 width: 40px;
	 height: 40px;
	 border-radius: 100%;
	 background-color: var(--color-teal-500);
	 left: calc(50% - 25px);
	 top: 40px;
	 border: 5px solid #b4b2b2;
	 transition: background-color .5s ease-in-out;
}
 .rocket .fin {
	 position: absolute;
	 z-index: -100;
	 height: 55px;
	 width: 50px;
	 background-color: var(--color-teal-500);
	 transition: background-color .5s ease-in-out;
}
 .rocket .fin-left {
	 left: -30px;
	 top: calc(100% - 55px);
	 border-top-left-radius: 80%;
	 border-bottom-left-radius: 20%;
}
 .rocket .fin-right {
	 right: -30px;
	 top: calc(100% - 55px);
	 border-top-right-radius: 80%;
	 border-bottom-right-radius: 20%;
}
 .rocket .exhaust-flame {
	 position: absolute;
	 top: 90%;
	 width: 28px;
	 background: linear-gradient(to bottom, transparent 10%, #f5f5f5 75%, transparent 100%);
	 height: 160px;
	 left: calc(50% - 14px);
	 animation: exhaust 0.3s infinite;
	 z-index: 5;
	 transition: all .3s ease-in-out;
}

.rocket .window,
.rocket .fin {
	transition: background-color 2.5s ease-in-out;
  	background-color: var(--rocket-color, var(--color-teal-500)) !important;
}
 
@keyframes bounce {
  0% {
    transform: translate3d(0px, 0px, 0);
  }
  50% {
    transform: translate3d(0px, -4px, 0);
  }
  100% {
    transform: translate3d(0px, 0px, 0);
  }
}

@keyframes exhaust {
  0% {
    background: linear-gradient(to bottom, transparent 10%, #f5f5f5 75%, transparent 100%);
  }
  50% {
    background: linear-gradient(to bottom, transparent 8%, #f5f5f5 75%, transparent 100%);
	height: 155px;
  }
  75% {
    background: linear-gradient(to bottom, transparent 12%, #FFF 75%, transparent 100%);
  }
}

@keyframes zoomInUp {
  0% {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translateY(4000px);
  }
  
  20% {
    opacity: 0;
  }
  
  90%{
	opacity: 1;
    transform: scale3d(1, 1, 1) translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1) translateY(0);
  }
}

.zoomInUp {
  animation: zoomInUp forwards 3s;
}

.rocket.hyperspeed .rocket-body {
  animation: propel 2.5s infinite;
}

.rocket.hyperspeed .exhaust-flame {
	animation: propel-exhaust 2.5s infinite;
}

/* Optional faster bounce */
@keyframes propel {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}

/* More intense flame */
@keyframes propel-exhaust {
  0% {
    background: linear-gradient(to bottom, transparent 10%, #f5f5f5 75%, transparent 100%);
  }
  50% {
    background: linear-gradient(to bottom, transparent 8%, #f5f5f5 75%, transparent 100%);
	transform: translateY(-100px);
	height: 350px;
  }
  75% {
    background: linear-gradient(to bottom, transparent 12%, #FFF 75%, transparent 100%);
  }
}

</style>