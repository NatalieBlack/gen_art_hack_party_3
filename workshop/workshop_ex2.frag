// Author: 
// Title: 

#ifdef GL_ES
precision mediump float;
#endif

//globals created by this editor; 
uniform vec2 u_resolution; //size of canvas
uniform vec2 u_mouse; //for interactivity
uniform float u_time; //time since it started

//bottom left is 0,0

void main() {
    gl_FragCoord; //vec3 but z is meaningless in this case
    //cast to a vec2 with.xy
    //normalized coordinates
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    st = st - vec2(0.350,0.660); //range from -.5 to .5 instead of 0 to 1
    // ^ click to change position
    
    float radius = 0.268;//click to change size
    
    //set pixel colour based on whether it's inside circle or not
    float veclen = length(st);
    
    if(veclen > radius) {
      gl_FragColor = vec4(0.1,0.5,0.7,1.0);
    } else {
      gl_FragColor = vec4(1.0,1.0,1.0,1.0);
    }

}
