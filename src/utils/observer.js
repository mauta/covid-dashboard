export default class Observer{
  constructor(){
    this.listeners = [];
  }
  addListener(name, callback){
    let id = {};
    this.listeners.push({id, name, callback});
    return id;
  }
  addOnceListener(name, callback){
    let id = {};
    this.listeners.push({id, name, callback:()=>{
      callback();
      this.removeListener(id);
    }});
    return id;
  }
  removeListener(id){ this.listeners = this.listeners.filter(it=>it.id!=id); }
  dispath(name){ this.listeners.filter(it=>it.name==name).forEach(it=>it.callback()); }
}