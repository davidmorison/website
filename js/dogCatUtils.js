function convolve(ts,wv){
  nt = ts.length;
  nw = wv.length;
  cs = new Array(nt);
  R  = Math.floor(nw/2);
  for(var i=0; i < nt; i++){
    x=0
    for(var j=0; j < nw; j++){
      var ii=i+j-R
      var inc=0
      if (ii<0) { inc = 0} else if (ii>=nt) {inc = 0 } else {inc = ts[ii]*wv[j]}
      x+=inc;
      }
      cs[i]=x;
    }
    return cs;
}

function add_ar(a,b){
  n = a.length;
  c = new Array(n);
  for(var i=0; i < n; i++){
    c[i]=a[i]+b[i];
  }
  return c;
}

function window_amp(ts){
  nt=ts.length;
  rate=50000; //approx samples per second?
  syl_per_sec=0.5*(3.3+5.9); // between 3 and 6 syllables per second
  n_window=Math.floor(rate/syl_per_second);
  wv = new Array(n_window);
  for(var i=0; i < n; i++){
    wv[i]=1-Math.abs((2*i-n_window)/n_window);
  }
  //dt=1./rate
  //lo_f= 500  // low freq common in speech
  //hi_f=2000  // hi freq common in speach
  //n_f =10    // how many freq to consider
  return convolove(ts,wv);
}

// for 