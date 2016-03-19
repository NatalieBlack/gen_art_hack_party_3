// Author: Xavier Snelgrove @wxswxs
//modified by Natalie Black :)
// Title: Candy

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 stripes(in vec2 uv) {
    vec3 colA = vec3(0.821,0.817,0.825);
    vec3 colB = vec3(0.910,0.671,0.645);
    return mod(uv.x, 1.0) > 0.5 ? colA : colB;
}

vec3 zags (in vec2 uv, float delta) {
    vec2 zagged_uv = uv;
    zagged_uv.x = uv.x - delta * abs(mod(uv.y, 1.080) - 1.0);
	return stripes(zagged_uv);
}

vec2 cart2polar(vec2 cartesian) {
    float r = length(cartesian);
    float t = atan(cartesian.x,cartesian.y);
    return vec2(t,r);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    st += vec2(.0);    
    //st = vec2(st.x-0.5, st.y-0.5);
    st = cart2polar(st - vec2(0.5, 0.5)) + vec2(u_time*0.2, 0.0);
    float dx = 0.5/u_resolution.x;
    float dy = 0.5/u_resolution.y;
    float scale = 1.0;
    float delta = 5.480 * tan(u_time*0.1);
    gl_FragColor = vec4(zags(st * scale, delta),2.0);
    gl_FragColor += vec4(zags((st + vec2(dx,0)) * scale, delta),1.0);
    gl_FragColor += vec4(zags((st + vec2(0,dy))* scale, delta),1.0);
    gl_FragColor += vec4(zags((st + vec2(dx,dy)) * scale, delta),1.0);
    gl_FragColor /= 4.0;
}
