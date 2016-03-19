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
    //pixel coords
    gl_FragCoord; //vec3 but z is meaningless in this case
    //cast to a vec2 with.xy
    //normalized coordinates
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    //if, mod, abs for hard effects
    if(mod(u_time, 3.0) > 1.8){
        //glitch mode
        if(mod(st.y + u_time*0.542, 1.0) < 0.1 ){
            //this is where I want it
            st.x += 0.3;
        }
    }
    
    //warping based on location on screen and based on time
    st.x += sin(st.x*st.y*6.0)+u_time*0.1;
    st.y += sin(st.x + st.y * 3.2 + u_time * 0.3);
    
    //scale coordinate sys by 20 so image of set size gets scaled down
    st = st * 20.0;
    
    st = mod(st, 1.0);//to repeat
    
    st = st - vec2(0.520,0.570); //range from -.5 to .5 instead of 0 to 1
    // ^ click to change position
    
    float radius = 0.056;//click to change size
    
    //set pixel colour based on whether it's inside circle or not
    float veclen = length(st);
    
    
    //get rid of jagged edge by making new rule for pixels are right on the edge
    vec4 colA = vec4(0.1,0.5,0.7,1.0);
    vec4 colB = vec4(0.076,0.798,1.000,1.000);
    
    //start interpolation, stop interpolation
    
    //to increase blur:
    // float t = smoothstep(radius - 7.0/u_resolution.x, radius + 7.0 / u_resolution.y, veclen);
    // float t = smoothstep(radius - 1.0/u_resolution.x, radius + 1.0 / u_resolution.y, veclen);

    float b = 50.0;
    float t = smoothstep(radius - (sin(u_time)*b + (b + 1.0))/u_resolution.x, radius + (sin(u_time)*b + (b+1.0)) / u_resolution.y, veclen);
    gl_FragColor = (1.0 - t ) * colB + t * colA;
    //or
        // gl_FragColor = mix(colA, colB, t);


}
