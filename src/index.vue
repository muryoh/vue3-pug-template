<template lang="pug">
Renderer(ref="renderer" resize :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }")
    Camera(:position="{ x: 0, y: 0, z: 100 }")
    Scene(background="#000000")
        NoisyImage(
            src="https://raw.githubusercontent.com/quanzaiyu/vscode-vue-pug-enhanced/1267d7c97d115c4581383b718982f899eff8e16b/images/icon.png" 
            :width="700"
            :time-coef="0.0015"
            :noise-coef="2"
            :z-coef="5"
            :disp-coef="0.015"
            :rotation="{ x: -Math.PI / 6 }"
        )
</template>

<script>
import { Camera, Renderer, Scene } from "troisjs";
import NoisyImage from "troisjs/src/components/noisy/NoisyImage.js";
// Should not be necessary - will be improved on next iteration as we only
// bundle actually used dependencies
import * as three from "three";
export default {
    components: { Camera, NoisyImage, Renderer, Scene },
};
</script>
