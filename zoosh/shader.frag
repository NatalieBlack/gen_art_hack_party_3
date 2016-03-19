// Author: Natalie Black :)
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
    //pixel coords
    gl_FragCoord; //vec3 but z is meaningless in this case
    //cast to a vec2 with.xy
    //normalized coordinates
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    //if, mod, abs for hard effects
    // if(mod(u_time, 3.0) > 1.8){
    //     //glitch mode
    //     if(mod(st.x*st.y + u_time*0.542, 1.0) < 0.1 ){
    //         st.y += 0.0001;
    //     }
    // }
    

    
    //warping based on location on screen and based on time
    st.x += sin(st.x*1.376)+u_time*0.000121;
    st.y += sin(st.y * 100.06 + u_time * 0.1);
    
    //scale coordinate sys by 20 so image of set size gets scaled down
    st.y = st.y * 5.0;
    
    st = mod(st, cos(u_time*0.5));//to repeat
    
    st = st - vec2(0.520,0.570); //range from -.5 to .5 instead of 0 to 1
    // ^ click to change position
    
    float radius = 3.96;//click to change size
    
    //set pixel colour based on whether it's inside circle or not
    float veclen = length(st);
    
    
    //get rid of jagged edge by making new rule for pixels are right on the edge
//     float colA_r = min(0.9,max(tan(st.x), 0.020));
//     float colA_g = min(0.6,max(st.x*st.x, 0.1));
//     float colA_b = max(0.1, st.y);
    
//     float colB_b = min(0.6, max(0.02, st.y/st.x));
//     float colB_g = max(0.6,min((st.y)/0.4, 0.8));
//     float colB_r = 0.01;
    
    float colA_r = 0.0;
    float colA_g = 0.0;
    float colA_b = 0.0;
    
    float colB_b = sin(st.x/st.y)*0.5+0.5;
    float colB_g = tan(u_time*0.1143)*0.25+0.25;
    float colB_r = sin(st.y+u_time*0.12)*0.25 + 0.25;

    vec4 colA = vec4(colA_r,colA_g,colA_b,1.000);
    vec4 colB = vec4(colB_r,colB_g, colB_b,1.000);

    
    //start interpolation, stop interpolation
    
    //to increase blur:
    // float t = smoothstep(radius - 7.0/u_resolution.x, radius + 7.0 / u_resolution.y, veclen);
    // float t = smoothstep(radius - 1.0/u_resolution.x, radius + 1.0 / u_resolution.y, veclen);

    float b = 200.0;
    float t = smoothstep(radius - (sin(u_time)*b + (b + 5.0))/u_resolution.x, radius + (sin(u_time)*b + (b+5.0)) / u_resolution.y, veclen);
    gl_FragColor = (1.0 - t ) * colB + t * colA;
    //or
        // gl_FragColor = mix(colA, colB, t);


}
