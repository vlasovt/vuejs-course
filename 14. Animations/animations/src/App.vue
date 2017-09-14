<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="animationType" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">{{ buttonLabel }}</button>
                <br><br>
                <!-- you can only animate one element at a time inside the animation tag-->
                <!-- css classes: *-enter, *-enter-active, *-leave, *-leave-active (defaul name: v-active)-->
                <transition :name="animationType">
                     <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition name="slide" type="animation" appear>
                     <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition
                 appear
                 enter-active-class="animated bounce"
                 leave-active-class="animated shake">
                     <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="animationType" mode="out-in">
                     <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                     <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"  
                  
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled" 
                    :css="false" >
                    
                    <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                animationType: 'fade',
                load: true,
                elementWidth: 100
            }
        },
        methods:{
            beforeEnter(el){
                console.log('before enter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done){
                console.log('enter');
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el){
                console.log('after-enter');
            },
            enterCancelled(el){
                console.log('enter-cancelled');
            },


            beforeLeave(el){
                console.log('before-leave');
                this.elementWidth = 300;
                 el.style.width = this.elementWidth + 'px';
            },
            leave(el, done){
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round> 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el){
                console.log('after-leave');
            },
            leaveCancelled(el){
                console.log('leave-cancelled');
            }

        },
        computed:{
            buttonLabel(){
                return this.show? "Hide Info Alert": "Show Info Alert";
            }
        }
    }
</script>

<style>
    .fade-enter{
        opacity: 0;
    }

    .fade-enter-active{
        transition: opacity 1s;
    }

    .fade-leave{
        /*opacity: 1; no need to set because the opacity goes to 1 by default*/
    }

    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter{
        opacity: 0;
        /*transform: translateY(20px);*/
    }

    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }

    .slide-leave{
        
    }

    .slide-leave-active{
         animation: slide-out 1s ease-out forwards;
          transition: opacity 1s;
          opacity: 0;
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }
        to{
             transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
             transform: translateY(20px);
        }
    }
</style>
