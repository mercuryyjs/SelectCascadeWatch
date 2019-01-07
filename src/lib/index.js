import Vue from 'vue'
import SelectCascadeWatch from './SelectCascadeWatch'
let cascade = {}
cascade.install = function(Vue,options){
    Vue.component(SelectCascadeWatch.name,SelectCascadeWatch)
} 
export default cascade