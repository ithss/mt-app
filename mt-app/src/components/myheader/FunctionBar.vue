<template>
  <el-row
  type="flex"
  justify="end"
      :gutter="20">
    <ul class="functions">
      <el-col :span="4"
       v-for="(item, index) in arr" 
       :key='item.funcName+index'>
        <li>
          <router-link 
          :to="item.to"
          :class="{'pulldown': item.hasList}">
          {{ item.hasList ? '' : item.funcName }}
          </router-link>
          
          <template v-if="item.hasList">
            <template v-if="!item.isRow">
              <el-dropdown>
                <span class="el-dropdown-link">
                  {{ item.funcName }}
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(ele, index) in item.list" :key="ele+index">
                    <router-link :to='ele.to'>
                      {{ ele.selection }}
                    </router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>

            <template v-else>
              <div class="dropdown">
                <span 
                @mouseenter="handleHover" 
                @mouseleave="handleHover"
                :to="item.to">
                {{item.funcName}}
                </span>

                <div class="droplist" v-show="isHover">
                    <ul
                     v-for="(ele, index) in item.list" 
                    :key="index">
                          <dl>
                            <dt> {{ ele.type }} </dt>
                            <dd
                             v-for="item in ele.items"
                            :key="item">
                            <a 
                            v-if="ele.isImg" 
                            href="#"
                            class="image">
                              <img :src="item" alt="">
                            </a>   

                            {{ ele.isImg ? '' : item }}
                            
                            </dd>
                          </dl>

                            
                    </ul>
                </div>
              </div>
            </template> 
          </template> 


        </li>
      </el-col>
    </ul>
  </el-row>

</template>

<script>
  export default {
    methods: {
      handleHover() {
        this.isHover = !this.isHover;
      }
    },
    data() {
      return {
        isHover: false,
        arr: [{
            funcName: '我的美团',
            to: '/login',
            hasList: true,
            list: [
              {
                selection: '开心啊',
                to: '/login'
              },
              {
                selection: '开心啊',
                to: '/'
              },
              {
                selection: '开心啊',
                to: '/'
              },
              {
                selection: '开心啊',
                to: '/'
              }
            ]
          },
          {
            funcName: '手机App',
            to: '/',
            hasList: false
          },
          {
            funcName: '商家中心',
            to: '/',
            hasList: true,
            list: [
              {
                selection: '当然',
                to: '/'
              },
              {
                selection: '超级开心啊',
                to: '/'
              }
            ]
          },
          {
            funcName: '美团规则',
            to: '/',
            hasList: true
          },
          {
            funcName: '网站导航',
            to: '/',
            hasList: true,
            isRow: true,
            list: [
              {
                type: '酒店旅游',
                items: [
                    '国际机票',
                    '火车票',
                    '榛果民宿',
                    '经济型酒店',
                    '主题酒店',
                    '商务酒店',
                    '公寓',
                    '豪华酒店',
                    '客栈',
                    '青年旅社',
                    '度假酒店',
                    '别墅',
                    '农家院'
                ]
              },{
                type: '吃美食',
                items: [
                    '烤鱼',
                    '特色小吃',
                    '烧烤',
                    '自助餐',
                    '火锅',
                    '代金券'
                ]
              },{
                type: '看电影',
                items: [
                    '热映电影',
                    '热门影院',
                    '热映电影口碑榜',
                    '最受期待电影',
                    '国内票房榜',
                    '北美票房榜',
                    '电影排行榜'
                ]
              },{
                type: '手机应用',
                isImg: true,
                items: [
                    '//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png',
                    '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
                    '//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png',
                    '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
                    '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png'
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
    .functions {
        font-size: 12px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding-right: 10vw;
        a{
            color: #999;
            text-decoration: none;
            white-space: nowrap;
            &:hover{
                color: orange;
            }
        }
        span{
          white-space: nowrap;
        }
        .dropdown{
          .droplist{
            position: absolute;
            display: flex;
            top: 20px;
            right: 10vw;
            padding: 20px;
            width: 80vw;
            height: 35vh;
            background-color: #ffc;
            dl{
              display: flex;
              margin-left: 2vw;
              width: 15vw;
              flex-wrap: wrap;
              justify-content: space-around;
              dt{
                width: 100%;
                text-align: center;
                line-height: 30px;
              }
              dd{
                text-align: center;
                line-height: 30px;
                padding: 10px;
                a img{
                  height: 50px;
                  width: 50px;
                }
              }
            }
            
          }
        }
    }
</style>