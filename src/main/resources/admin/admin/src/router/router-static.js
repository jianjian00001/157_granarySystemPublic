import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import liangcang from '@/views/modules/liangcang/list'
    import liangcangChuruInout from '@/views/modules/liangcangChuruInout/list'
    import liangcangChuruInoutList from '@/views/modules/liangcangChuruInoutList/list'
    import renwu from '@/views/modules/renwu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryLiangcang from '@/views/modules/dictionaryLiangcang/list'
    import dictionaryLiangcangChuruInout from '@/views/modules/dictionaryLiangcangChuruInout/list'
    import dictionaryLiangcangShifou from '@/views/modules/dictionaryLiangcangShifou/list'
    import dictionaryRenwu from '@/views/modules/dictionaryRenwu/list'
    import dictionaryRenwuShifou from '@/views/modules/dictionaryRenwuShifou/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryLiangcang',
        name: '水稻种型',
        component: dictionaryLiangcang
    }
    ,{
        path: '/dictionaryLiangcangChuruInout',
        name: '出入库类型',
        component: dictionaryLiangcangChuruInout
    }
    ,{
        path: '/dictionaryLiangcangShifou',
        name: '是否喷射农药',
        component: dictionaryLiangcangShifou
    }
    ,{
        path: '/dictionaryRenwu',
        name: '水稻种类',
        component: dictionaryRenwu
    }
    ,{
        path: '/dictionaryRenwuShifou',
        name: '出粮收粮',
        component: dictionaryRenwuShifou
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/liangcang',
        name: '粮仓',
        component: liangcang
      }
    ,{
        path: '/liangcangChuruInout',
        name: '出入库',
        component: liangcangChuruInout
      }
    ,{
        path: '/liangcangChuruInoutList',
        name: '出入库详情',
        component: liangcangChuruInoutList
      }
    ,{
        path: '/renwu',
        name: '出受粮任务',
        component: renwu
      }
    ,{
        path: '/yonghu',
        name: '粮仓保管员',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
