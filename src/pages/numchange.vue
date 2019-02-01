<template>
    <div>
        <ul>
            <li>
                <!-- commit  触发函数的方法 -->
                <button @click="$store.commit('reduce')">-</button>
                <p>{{$store.state.num}}</p>
                <button @click="$store.commit('add')">+</button>
            </li>
        </ul>
        
    </div>
</template>
 
<script>
    import store from "../vuex/store"
 
    export default{
　　　　 name:"shortcut",
        store
　　}
 
</script>
 
<style>
button,p{
    display: inline-block;
}
</style>
