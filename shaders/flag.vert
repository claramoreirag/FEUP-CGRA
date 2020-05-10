#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float timeFactor;


void main() {
    

    vTextureCoord = aTextureCoord;

    vec3 offset = vec3 (0.0,0.0,0.0);
    //offset.z=0.07*sin(aVertexPosition.x*20.0);
    offset.z=sin(vTextureCoord.s*20.0 + 3.0*timeFactor);
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
} 