function edges1(m,f){
    if (m.y - f.y < f.height/2 + m.height/2
      && f.y - m.y < f.height/2 + m.height/2){
        return true; 
  }
  else{
    return false;
  }
  }