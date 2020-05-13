#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec4 normal;

uniform int supp;

void main() {
    float limit = -0.5 + (1.0 / 5.0) * float(supp);

    if (coords.x <= limit){
        gl_FragColor.rgb =  vec3(1.0 - (0.5 + coords.x / 0.5), 0.5 + coords.x / 0.5, 0);
        gl_FragColor.a = 1.0;
    }
    else {
        gl_FragColor = vec4(0.5, 0.5, 0.5, 1);//grey
    }
}