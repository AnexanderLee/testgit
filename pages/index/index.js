Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    outTypeShow:false,
    dateShow:false,
    outTypeName:'请选择出行类型',
    outDate:'请选择出行时间',
    minDate: new Date(2019, 9, 1).getTime(),
    maxDate: new Date().getTime(),
    defaultDate:new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    actions: [
      {
        name: '境内',
      },
      {
        name: '入境',
      }
      // {
      //   name: '选项',
      //   subname: '副文本',
      //   openType: 'share',
      // }
    ],
    markers: [{
      // iconPath: "/resources/others.png",
      id: 0,
      latitude: 116.413384,
      longitude: 40.910925,
      width: 50,
      height: 50
    }],
    circle: [{
      // iconPath: "/resources/others.png",
      id: 0,
      latitude: 114.153948,
      longitude: 30.345584,
      color:"#eee",
      fillColor:"#ccc",
      radius:40
    }],
    polyline: [{
      points: [{
        longitude: 116.413384,
        latitude: 39.910925
      }, {
        longitude: 116.413384,
        latitude: 39.910925
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      // iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    popupHeight: "30vh",
    count:-1,
    activeNames: [],
    option: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    value: 'a',
    active: 0,
  },
  showPopup(){
    this.setData({
      count:this.data.count+1
    })
    if(this.data.count % 2 === 0){
      this.setData({
        popupHeight:'30vh'
      })
    }else{
      this.setData({
        popupHeight:'60vh'
      })
    }
  },
  displayOutTypePopup(){
    this.setData({ outTypeShow: true });
  },
  displayDatePopup(){
    this.setData({ dateShow: true });
  },
  doClose() {
    this.setData({ outTypeShow: false });
  },
  dateClose() {
    this.setData({ dateShow: false });
  },
  formatDate(date) {
    var date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event){
    // const [start, end] = event.detail;
    this.setData({
      dateShow:false,
      outDate: this.formatDate(event.detail)
    })
    // var year = val/1000/60/60/24/365
    // var day = 
    // console.log(this.timestamp(val.detail))
  },
  onCancel(val){
    console.log(val)
    this.setData({
      dateShow:false
    })
    // var year = val/1000/60/60/24/365
    // var day = 
    // console.log(this.timestamp(val.detail))
  },
  onSelect(event) {
    console.log(event.detail);
    this.setData({
      outTypeName:event.detail.name
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.detail.markerId)
  },
  controltap(e) {
    console.log(e.detail.controlId)
  },
  onSwich(event) {
    // event.detail 的值为当前选中项的索引
    console.log(event.detail)
    this.setData({ 
      active: event.detail ,
      index: event.detail
    });
    console.log(this.data.index)
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  timestamp(timestamp){
    var d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
    var year=d.getFullYear()
    var month=d.getMonth()+1
    var day=d.getDate()
    var hour=d.getHours()
    var minute=d.getMinutes()
    var second=d.getSeconds()
      if(month<10){
      month='0'+month
    }
    if(day<10){
      day='0'+day
    }
    if(hour<10){
      hour='0'+hour
    }
    if(minute<10){
      minute='0'+minute
    }
    if(second<10){
      second='0'+second
    }
    let html=year + "-" + month + "-" +day  +'  '+ hour+':'+minute+':'+second
    return html
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})