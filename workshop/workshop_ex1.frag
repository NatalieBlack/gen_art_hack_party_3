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
    st.x *= u_resolution.x/u_resolution.y; //in case of non-square canvas
    
    st += vec2(.0);
    vec3 color = vec3(1.);
    color = vec3(st.x,st.y,abs(sin(u_time)));

    //gl_fragcolor is always a thing
    //click on vec4 for colour picker and it will fill in values
    //sin(u_time)*0.5 + 0.5: from -1 to 1 -> -0.5 to 0.5 -> 0 to 1
    //abs(sin(u_time)) alternative (notice it's bouncier)
    gl_FragColor = vec4(st.y,sin(u_time)*0.5 + 0.5,st.x,1.000); //rgba
}
