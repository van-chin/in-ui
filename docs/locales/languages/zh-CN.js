/**
 * 中文语言包
 */

export default {
  /** 系统主体框架信息 */
  main: {
    lang: "中文", //中文
    title: "AFS管理系统", //AFS管理系统
    manager: "管理系统", //管理系统
    monitor: "监控系统", //监控系统
    userInfo: "用户信息", //用户信息
    modPwd: "修改密码", //修改密码
    notLogin: "未登录", //未登录
    confirmExit: "确定退出当前系统吗？", //确定退出当前系统吗？
    exitSystem: "退出系统", //退出系统
    inUsername: "请输入用户名", //请输入用户名
    inPassword: "请输入密码", //请输入密码
    login: "登录", //登录
    oldPwd: "旧密码", //旧密码
    newPwd: "新密码", //新密码
    cfmPwd: "确认密码", //确认密码
    inOldPwd: "请输入旧密码", //请输入旧密码
    inNewPwd: "请输入新密码", //请输入新密码
    inCfmPwd: "请输入确认密码", //请输入确认密码
    oldPwdNotEmpty: "旧密码不能为空", //旧密码不能为空
    newPwdNotEmpty: "新密码不能为空", //新密码不能为空
    cfmPwdNotEmpty: "确认密码不能为空", //确认密码不能为空
    pwdLenRange: "请输入6-24位字符的密码", //请输入6-24位字符的密码
    pwdNotMatch: "密码不一致！", //密码不一致！
    pwdModSuccess: "密码修改成功！", //密码修改成功！
    welcome: "欢迎光临" //欢迎光临
  },

  //通用标签，按钮，文本,

  /** 通用操作信息 */
  operate: {
    operate: "操作", //操作
    add: "新增", //新增
    view: "查看", //查看
    details: "查看详情", //查看详情
    mod: "修改", //修改
    del: "删除", //删除
    cancel: "取消", //取消
    confirm: "确认", //确认
    sequence: "序号", //序号
    refresh: "刷新", //刷新
    start: "启动", //启动
    stop: "停止", //停止
    maximize: "最大化", //最大化
    minimize: "最小化", //最小化
    reduction: "减少", //减少
    submit: "提交", //提交
    next: "下一步", //下一步
    previous: "上一步", //上一步
    back: "返回", //返回
    import: "导入", //导入
    export: "导出", //导出
    print: "打印", //打印
    search: "搜索", //搜索
    query: "查询", //查询
    save: "保存", //保存
    yes: "确定", //确定
    editPort: "编辑端口", //编辑端口
    reset: "重置", //重置
    zoomOut: "缩小", //缩小
    zoomIn: "放大", //放大
    offline: "离线", //离线
    online: "在线", //在线
    await: "待机", //待机
    fiberConnect: "移纤", //移纤
    test: "测试", //测试
    authorization: "授权", //授权
    damage: "损坏", //损坏

    deviceType: "设备类型", //设备类型
    region: "所属区域", //所属区域

    stationName: "站点名称", //站点名称
    stationCode: "站点编码", //站点编码
    stationStatus: "站点状态", //站点状态
    equipmentRoom: "机房名称", //机房名称
    equipmentRoomCode: "机房编码", //机房编码
    deviceName: "设备名称", //设备名称
    deviceCode: "设备编码", //设备编码
    resourceCode: "资源编码", //资源编码
    model: "设备型号", //设备型号
    regionStationRoom: "区域/站点/机房", //区域/站点/机房

    aEndDeviceNameCode: "A端设备名称/编码", //A端设备名称/编码
    zEndDeviceNameCode: "Z端设备名称/编码", //Z端设备名称/编码
    aEndDeviceName: "A端设备名称", //A端设备名称
    aEndDeviceCode: "A端设备编码", //A端设备编码
    aEndDevicePort: "A端设备端口", //A端设备端口
    zEndDeviceName: "Z端设备名称", //Z端设备名称
    zEndDeviceCode: "Z端设备编码", //Z端设备编码
    zEndDevicePort: "Z端设备端口", //Z端设备端口
    serviceNameCode: "业务名称/编码", //业务名称/编码
    aEndRegion: "A端区域", //A端区域
    zEndRegion: "Z端区域", //Z端区域
    aEndStationRoom: "A站点/机房", //A站点/机房
    zEndStationRoom: "Z站点/机房", //Z站点/机房

    aEndRegionStationRoom: "A端区域/站点/机房", //A端区域/站点/机房 起始端区域/站点/机房
    aEndDevice: "A端设备", //A端设备
    intermediateNode: "中间节点", //中间节点
    zEndRegionStationRoom: "Z端区域/站点/机房", //Z端区域/站点/机房 终止端区域/站点/机房
    zEndDevice: "Z端设备", //Z端设备

    aEndConnectedDevice: "A端连接设备", //A端连接设备
    zEndConnectedDevice: "Z端连接设备", //Z端连接设备

    routeInfo: "路由信息", //路由信息
    startFibreConnect: "已启动移纤任务！", //已启动移纤任务！

    fail: "故障", //故障
    standby: "备用", //备用
    idle: "空闲", //空闲
    port: "端口", //端口

    routeNameCode: "路由名称/编码", //路由名称/编码
    routeName: "路由名称", //路由名称
    routeCode: "路由编码", //路由编码
    channelName: "通道名称", //通道名称
    pleaseEnterRouteNameCode: "请输入路由名称/编码", //请输入路由名称/编码
    //端口状态

    selectedPort: "选中端口", //选中端口
    idlePort: "空闲端口", //空闲端口
    serviceAvailable: "主用(业务已通)", //主用(业务已通)
    standbyPort: "备用端口", //备用端口
    serviceUnavailable: "主用(业务未通)", //主用(业务未通)
    linkFailure: "链路故障", //链路故障
    damagedPort: "损坏端口", //损坏端口
    loopbackPort: "环回端口", //环回端口
    creator: "创建人", //创建人
    creationTime: "创建时间", //创建时间

    subRack: "子架", //子架
    slot: "槽位", //槽位
    selected: "选中", //选中
    sendReceive: "收/发", //收/发
    send: "发送", //发送
    receive: "接收", //接收
    pleaseSelect: "请选择", //请选择
    startTime: "开始时间", //开始时间
    endTime: "结束时间", //结束时间
    regionTree: "区域树", //区域树，站点树 区域站点树
    step1: "步骤1", //步骤1
    step2: "步骤2", //步骤2
    step3: "步骤3", //步骤3
    enterConfirm: "按回车键确认", //按回车键确认  面数，板卡，槽位数字输入
    surfaceName: "面名称", //面名称
    nominalCapacity: "标称容量", //标称容量
    installedCapacity: "已安装容量", //已安装容量
    subRackNumber: "子架数", //子架数
    subRackName: "子架名称", //子架名称
    slotNumber: "槽位数", //槽位数
    registrationTime: "注册时间", //注册时间
    startStatus: "启动状态", //启动状态
    updateStatus: "升级状态", //升级状态
    logStatus: "日志上报状态", //日志上报状态
    connected: "成端", //成端
    connectedNumber: "成端数", //成端数
    noData: "暂无数据", //暂无数据,无数据
    slotNmae: "槽位名称", //槽位名称
    pleaseSelectMsg: "请选择{msg}", //请选择    组合消息拼接用
    pleaseInputMsg: "请输入{msg}", //请输入    组合消息拼接用

    okYes: "是", //是
    okNo: "否", //否
    with: "有", //有
    without: "无", //无
    all: "全部", //全部
    isBoardOn: "是否插板卡", //是否插板卡
    isOpticalBoard: "是否为光板", //是否为光板
    portCapacity: "端口容量", //端口容量  光板端口容量
    portInfo: "端口信息", //光板端口信息  端口信息
    portDetails: "端口详情", //端口详情
    isModuleOn: "是否插光模块", //是否插光模块
    interfaceType: "接口类型", //模块接口类型 接口类型
    moduleType: "模块类型", //模块类型
    rate: "模块速率", //模块速率
    wavelength: "模块波长", //模块波长
    currentData: "当前数据", //当前数据
    Apply: "应用", // 应用
    down: "下移", // 下移
    up: "上移", // 上移

    startDate: "开始日期", //开始日期
    endDate: "结束日期" //结束日期
  },

  /** GIS信息 */
  gis: {
    vector: "矢量", //矢量
    image: "影像", //影像
    terrain: "地形", //地形
    tools: "工具", //工具
    distance: "测距", //测距
    area: "测面", //测面
    clear: "清除", //清除
    fullScreen: "全屏" //全屏
  },
  /** 通用提示信息 */
  tip: {
    inKeyword: "请输入关键字", //请输入关键字
    confirmDelete: "确认删除该条记录吗？", //确认删除该条记录吗？
    deleteSuccess: "删除成功！", //删除成功！
    saveSuccess: "保存成功！", //保存成功！
    unknownError: "未知错误", //未知错误
    operateSuccess: "操作成功！", //操作成功！
    updateSuccess: "获取成功！", //获取成功！刷新成功
    modifySuccess: "修改成功！", //修改成功！
    deletefailed: "删除失败！", //删除失败！
    savefailed: "保存失败！", //保存失败！
    operatefailed: "操作失败！", //操作失败！
    updatefailed: "获取失败！", //获取失败！刷新失败
    requestfailed: "请求失败！", //请求失败！
    requestSuccess: "请求成功！", //请求成功！查询成功
    onlyEnglishNumber: "只能为英文、数字、下划线", //只能为英文、数字、下划线
    msgNameNotEmpty: "{msg}名称不能为空", //名称不能为空     注意需要传递消息msg
    msgTypeNotEmpty: "{msg}类型不能为空", //类型不能为空     注意需要传递消息msg
    msgNotEmpty: "{msg}不能为空", //不能为空     注意需要传递消息msg
    msgInvalidFormat: "{msg}格式错误", //格式错误 注意需要传递消息msg
    pleaseSelectDevType: "Please select device type", //请选择设备类型
    netTestSuccessful: "网络测试成功", // 网络测试成功
    connectionSuccessfully: "连接关系建立成功", // 连接关系建立成功 连接关系建立完成

    modifyfailed: "修改失败！" //修改失败！
  },

  /** 执行结果下拉 */
  runResult: {
    all: "全部", //全部
    succes: "执行成功", //执行成功
    failure: "执行失败", //执行失败
    stopped: "已经停止", //已经停止
    running: "正在执行", //正在执行       (移纤/OTDR测试等非空闲状态）
    waiting: "等待执行" //等待执行
  },

  //运行状态
  runStatus: {
    all: "全部", //全部
    completed: "执行完成", //执行完成
    stopped: "已经停止", //已经停止
    running: "正在执行", //正在执行
    waiting: "等待执行" //等待执行
  },
  /** 操作结果下拉 */
  operationResult: {
    all: "全部", //全部
    succes: "成功", //成功
    failure: "失败" //失败
  },

  /** 确认状态 */
  alarmConfirmStatus: {
    all: "全部", //全部
    confirmed: "已确认", //已确认
    unconfirmed: "未确认" //未确认
  },

  /** 设备类型枚举 */
  deviceTypeEnum: {
    afs: "AFS设备", //AFS设备
    odf: "ODF架", //ODF架
    onu: "光交箱", //光交箱
    transmission: "传输设备", //传输设备
    opticalCable: "光缆" //光缆
  },

  //时间段
  timePeriodEnum: {
    lastFiveM: "最近五分钟", //最近五分钟
    lastHour: "最近一小时", //最近一小时
    lastDay: "最近一天", //最近一天
    lastWeek: "最近一周", //最近一周
    lastMonth: "最近一月", //最近一月
    lastYear: "最近一年" //最近一年
  },

  //告警等级枚举
  alarmLevEnum: {
    all: "全部", //全部
    critical: "一级告警", //一级告警
    major: "二级告警", //二级告警
    minor: "三级告警", //三级告警
    warning: "四级告警" //四级告警
  },

  //在线状态
  onlineStatusEnum: {
    all: "全部", //全部
    online: "在线", //在线
    offline: "离线" //离线
  },

  //授权状态
  authorizedStatusEnum: {
    authorized: "已授权", //已授权
    unauthorized: "未授权" //未授权
  },

  //是否启用
  enableDisableEnum: {
    enable: "启用", //启用
    disable: "禁用" //禁用
  },

  //首页
  homePage: {
    deviceStatusStatistics: "设备状态统计", //设备状态统计
    runningStatistics: "运行状态统计", //运行状态统计
    serviceChannnel: "业务路由通道", //业务路由通道
    resourcesStatistics: "资源统计", //资源统计
    allRegion: "全部区域", //全部区域
    idleRoute: "空闲路由通道", //空闲路由通道,空闲通道
    standbyRoute: "备用路由通道", //备用路由通道
    faultRouteChannel: "故障路由通道" //故障路由通道
  },

  //设备添加，光缆添加，网络节点
  deviceMangerPage: {
    addeNode: "新增网络节点", //新增通信网络节点
    viewNode: "查看网络节点", //查看通信网络节点
    editNode: "修改网络节点", //修改通信网络节点
    flangeType: "法兰盘类型", //法兰盘类型
    surfaceNumber: "面数", //面数
    custom: "自定义", //自定义
    inputPortNumber: "输入端口数", //输入端口数
    outputPortNumber: "输出端口数", //输出端口数
    opticalBoard: "光板", //光板
    portDetails: "端口详细", //端口详细
    cableCode: "光缆编号", //光缆编号
    cableName: "光缆名称", //光缆名称
    cableLevel: "光缆级别", //光缆级别
    cableType: "光缆类型", //光缆类型
    cableSpe: "光缆规格", //光缆规格
    fiberCoreType: "纤芯类型", //纤芯类型
    segmentInfo: "网段信息", //网段信息
    segmentCode: "网段编号", //网段编号
    segmentNmae: "网段名称", //网段名称
    segmentType: "网段类型", //网段类型
    aEendPort: "A-end Port", //A向端口
    zEendPort: "Z-end Port", //A向端口
    fiberCore: "Fiber Core", //纤芯
    connectViaCable: "Connect via optical cable?", //是否通过光缆连接
    pleaseSelCable: "Please select cable" //请选择光缆
  },

  //实时监控 设备状态
  monitorPage: {
    deviceStatus: "设备状态", //设备状态
    authorizationStatus: "授权状态", //授权状态
    deviceIp: "设备IP", //设备IP
    firmvareVersion: "固件版本", //固件版本
    heartbeatTime: "心跳时间", //心跳时间
    alarmStatus: "告警状态", //告警状态
    enterConfirmerDescription: "请输入确认人/确认描述/告警描述" //请输入确认人/确认描述/告警描述
  },

  //路由配置，路由图示
  routeConfigPage: {
    deleteStandbyRoute: "删除备用路由", //删除备用路由
    configStandbyRoute: "配置备用路由", //配置备用路由
    aEndServiceDevice: "A端业务设备", //A端业务设备
    aEndServiceDevicePort: "A端业务设备端口", //A端业务设备端口
    aEndAFSDevice: "A端AFS设备", //A端AFS设备
    aEndAFSDevicePort: "A端AFS设备端口", //A端AFS设备端口
    zEndServiceDevice: "Z端业务设备", //Z端业务设备
    zaEndServiceDevicePort: "Z端业务设备端口", //Z端业务设备端口
    zEndAFSDevice: "Z端AFS设备", //Z端AFS设备
    zEndAFSDevicePort: "Z端AFS设备端口", //Z端AFS设备端口
    standbyRouteNumber: "备用路由数量", //备用路由数量
    selectRoute: "选择路由 ", //选择路由
    selectedService: "已选业务", //已选业务
    routingGraphic: "路由图示", //路由图示
    routeList: "路由列表", //路由列表
    selectStandbyChannel: "选择备用路由通道" //选择备用路由通道
  },

  //业务拓扑 故障路由，故障业务
  serviceTopologyPage: {
    associatedService: "关联业务", //关联业务
    faultService: "故障业务", //故障业务
    associatedRoute: "关联路由", //关联路由
    faultRoute: "故障路由", //故障路由
    faultChannel: "故障通道", //故障通道
    selectedServiceNameCode: "所选端口对应业务名称与编码", //所选端口对应业务名称与编码
    selectedPortName: "所选端口对应名称", //所选端口对应名称
    asAServicePort: "作为A端业务设备端口", //作为A端业务设备端口
    asZServicePort: "作为Z端业务设备端口", //作为Z端业务设备端口
    asADockingPort: "作为A端连接设备端口", //作为A端连接设备端口
    asZDockingPort: "作为Z端连接设备端口", //作为Z端连接设备端口
    deviceDetail: "设备详情" //设备详情
  },

  //业务配置 智能开通，智能还原，智能恢复
  serviceConfigPage: {
    intelligentConnect: "智能开通", //智能开通

    recovery: "智能恢复", //智能恢复
    restore: "智能还原", //智能还原
    serviceTopology: "业务拓扑", //业务拓扑
    serviceName: "业务名称", //业务名称
    ServiceCode: "业务编码", //业务编码
    ServiceStatus: "业务状态", //业务状态

    lessConnectTime: "移纤时间短", //移纤时间短
    lessNode: "中间节点少", //中间节点少
    lessLength: "光缆总长少", //光缆总长少
    lowLinkloss: "链路损耗小", //链路损耗小
    recommendation: "推荐方案", //推荐方案

    lastTestTime: "最近一次OTDR检测时间", //最近一次OTDR检测时间
    usedTime: "移纤时长", //移纤时长
    retestOtdr: "是否重新进行OTDR检测?", //是否重新进行OTDR检测?

    updatesState: "并将原通道状态更新为", //并将原通道状态更新为
    startConnectTask: "是否启动移纤任务？", //是否启动移纤任务？

    CurrentTime: "当前时间", //当前时间
    settingTime: "设定时间", //设定时间
    setStartConnectTime: "设定开始移纤时间", //设定开始移纤时间
    locked: "锁定状态", //锁定状态
    recoveryAuto: "recovery automatically?", // 是否自动恢复
    otdrTestBeforeRec: "OTDR test before recovery?", // 恢复前是否OTDR测试
    channelDetails: "Channel Detail", // 备用通道详情
    uplink: "Uplink Devoce", // 上行设备
    downlink: "Downlink Devoce" // 下行设备
  },

  //手动测试
  manualTestPage: {
    manualTest: "OTDR手动测试", //OTDR手动测试
    channelNumber: "通道数量", //通道数量
    serviceOccupied: "业务占用", //业务占用
    standbyChannel: "备用通道", //备用通道
    idleChannel: "空闲通道", //空闲通道
    totalTasksNumber: "总任务数量", //总任务数量
    aggregatePro: "总任务进度", //总任务进度
    currentTask: "总任务进度", //当前任务
    currentProgress: "当前任务进度" //当前任务进度
  },

  //例测任务
  routineTestPage: {
    routingAfs: "路由中AFS设备", //路由中AFS设备
    fiberCoreNumber: "纤芯数", //纤芯数
    testDesc: "测试描述", //测试描述
    testCycle: "测试周期", //测试周期
    testTime: "每日测试时间段" //每日测试时间段
  },

  //测试记录/曲线详情
  testRecordPage: {
    referenceCurve: "是否为参考曲线", //是否为参考曲线
    trendContrast: "趋势对比", //趋势对比
    afsPort: "AFS-端口", //AFS-端口
    direction: "方向", //方向
    testTime: "测试时间", //测试时间
    eventsNumber: "事件总数", //事件总数
    cableLength: "光缆总长度", //光缆总长度
    linkLoss: "链路损耗", //链路损耗
    averageLoss: "平均损耗", //平均损耗
    testType: "测试类型", //测试类型
    testRange: "测试量程", //测试量程
    eventType: "事件类型", //事件类型
    linkLossdB: "链路衰减损耗(dB)", //链路衰减损耗(dB)
    reflectionLoss: "反射衰减损耗(dB)", //反射衰减损耗(dB)
    eventLoss: "事件损耗(dB)", //事件损耗(dB)
    distance: "距离(m)", //距离(m)
    saveCurve: "保存为参考曲线" //保存为参考曲线
  },

  //AFS调控
  afsControlPage: {
    runningStatus: "运行状态", //运行状态
    onlineStatus: "在线状态", //在线状态
    enterNameCode: "请输入设备名称/设备编码", //请输入设备名称/设备编码
    firmwareVersion: "固件版本" //固件版本
  },

  //移纤/调控
  fiberControlPage: {
    operate: "调控", //调控
    test: "检测", //检测
    selectedPortInfo: "选定端口信息", //选定端口信息
    serviceInfo: "业务信息", //业务信息
    selectedPort: "选定端口", //选定端口
    oppositeEquipment: "对端设备", //对端设备
    dockingPort: "对接端口", //对接端口
    connection: "建立连接", //建立连接
    replace: "更换", //更换
    relationship: "连接关系", //连接关系
    synchronize: "同步配置及连接关系", //同步配置及连接关系
    interactionLog: "交互日志", //交互日志
    operationLog: "操作日志" //操作日志
  },

  //OTDR测试/检测
  otdrTestPage: {
    testPara: "测试参数", //测试参数
    sampleFiber: "待测光纤", //待测光纤
    jointLossThreshold: "接头损耗阈值(dB)", //接头损耗阈值(dB)
    wavelength: "波长(mm)", //波长(mm)
    envReflectionThr: "事件反射阈值(dB)", //事件反射阈值(dB)
    pulseWidth: "脉宽(ns)", //脉宽(ns)
    fiberEndThr: "光纤末端阈值(dB)", //光纤末端阈值(dB)
    testRange: "测试量程(KM)", //测试量程(KM)
    correctionPara: "光缆修正参数", //光缆修正参数
    index: "折射率", //折射率
    testNumber: "测试次数", //测试次数
    testMode: "测试模式", //测试模式
    netTest: "网络测试", //网络测试
    startTest: "启动测试", //启动测试
    opTestPara: "光功率测试参数配置", //光功率测试参数配置
    opticalPower: "光功率(dBm)", //光功率(dBm)
    testModeEnum: {
      authorized: "平均测试", //平均测试
      autoTest: "自动测试", //自动测试
      realtimeTest: "实时测试" //实时测试
    },
    testLog: "测试日志"
  },

  //AFS任务
  afsTaskPage: {
    afsNameCode: "AFS名称/编码", //AFS名称/编码
    afsName: "AFS设备名称", //AFS设备名称
    afsCode: "AFS设备编码", //AFS设备编码
    taskType: "任务类型", //任务类型
    taskDesc: "任务描述", //任务描述
    subtasksNumber: "子任务总数", //子任务总数
    waiting: "等待执行", //等待执行
    executionStatus: "执行状态", //执行状态
    executionResult: "执行结果", //执行结果
    ScheduledStartTime: "计划开始时间", //计划开始时间
    progress: "执行进度", //执行进度
    endTime: "执行结束时间" //执行结束时间
  },

  //哑资源管理 //AFS配置
  dumbResourcesPage: {
    equipmentModel: "设备型号", //设备型号
    vendor: "生产厂商", //生产厂商 厂商/品牌
    inputTime: "录入时间" //录入时间
  },

  //设备连接关系配置页面连接详情1页面   //连接详情2页面 //图形化配置
  deviceConnectionsInfoPage: {
    connectionNumber: "连接数", //连接数
    graphicsConfig: "图形化配置", //图形化配置 图型化配置
    aEndDeviceZendPort: "A端设备Z向端口(纤芯)", //A端设备Z向端口(纤芯)
    aEndDeviceAendPort: "A端设备A向端口(纤芯)", //A端设备A向端口(纤芯)
    zEndDeviceZendPort: "Z端设备Z向端口(纤芯)", //Z端设备Z向端口(纤芯)
    zEndDeviceAendPort: "Z端设备A向端口(纤芯)", //Z端设备A向端口(纤芯)
    line: "连接线" //连接线
  },

  //历史告警页面 实时告警，
  historicalalarmHPage: {
    alarmLevel: "告警等级", //告警等级
    confirmStatus: "确认状态", //确认状态
    alarmName: "告警信号名称", //告警信号名称
    triggerValue: "触发值", //触发值
    alarmStartTime: "告警开始时间", //告警开始时间
    alarmEndTime: "告警恢复时间", //告警恢复时间
    alarmConfirmTime: "告警确认时间", //告警确认时间
    alarmCancelTime: "告警取消时间", //告警取消时间
    alarmConfirm: "告警确认", //告警确认
    alarmCancel: "告警取消", //告警取消
    alarmConfirmPrompt: "是否确认所选当前告警？", //是否确认所选当前告警？
    enterAlarmConfirmReason: "请填写确认告警原因", //请填写确认告警原因
    alarmCancelPrompt: "是否取消所选站点的当前告警？", //是否取消所选站点的当前告警？
    enterAlarmCancelReason: "请填写取消告警原因", //请填写取消告警原因
    alarmConfirmor: "告警确认人" //告警确认人
  },

  //系统日志页面
  systemLogPage: {
    operationResult: "操作结果", //操作结果
    operationTime: "操作时间", //操作时间
    operationUserModule: "请输入操作用户/操作模块", //请输入操作用户/操作模块
    operationUser: "操作用户", //操作用户
    operationModule: "操作模块", //操作模块
    operationName: "操作名称", //操作名称
    operationDescription: "操作描述", //操作描述
    operationIp: "操作端IP" //操作端IP
  },

  //设备日志页面
  deviceLogPage: {
    logType: "日志类型", //日志类型
    logSeq: "日志序号", //日志序号
    logInfo: "日志信息", //日志信息
    recordTime: "记录时间" //记录时间
  },

  //门限配置
  alarmStrategyPage: {
    alarmStrategy: "门限配置", //门限配置
    linkLoss: "链路损耗门限", //链路损耗门限
    averageLoss: "平均损耗门限", //平均损耗门限
    tipLength: "末端长度门限" //末端长度门限
  },

  //工单查询页面---------------------------------------------------------
  workOrderPage: {
    workOrderNameCode: "工单(业务)名称/编码", //工单(业务)名称/编码
    workOrderName: "工单(业务)名称", //工单(业务)名称
    receivingTime: "接收时间", //接收时间
    orderType: "工单类型", //工单类型
    confirmTime: "确认时间", //确认时间
    confirmor: "确认人", //确认人
    urgency: "紧急程度", //紧急程度
    orderStatus: "工单状态", //工单状态
    orderTypeEnum: {
      all: "全部", //全部
      establishService: "开通业务", //开通业务
      recoveryService: "恢复业务" //恢复业务
    }
  },

  //系统管理-机构
  orgPage: {
    orgCode: "机构编码", //机构编码
    orgName: "机构名称", //机构名称
    contacts: "联系人", //联系人
    contactsNumber: "联系电话", //联系电话/手机号码
    email: "电子邮箱", //电子邮箱
    address: "地址", //地址/家庭住址/联系地址
    displayOrder: "显示顺序", //显示顺序
    maneger: "负责人", //负责人
    departmentType: "部门类型", //部门类型
    orgType: "组织类型", //组织类型
    department: "部门", //部门，所属部分
    fax: "传真" //传真
  },

  //设备操控
  deviceCtrlPage: {
    netWorkMode: "网络模式", //网络模式  通信模式
    subnetMask: "子网掩码", //子网掩码
    gateway: "网关", //网关
    deviceIp: "设备IP", //本地IP ,设备IP
    devicePort: "设备端口", //本地端口 设备端口
    serverPort: "服务器端口", //远程端口 服务器端口
    serverIp: "服务器IP", //远程IP 服务器IP
    command: "指令控制", //指令控制
    clockSync: "时钟同步", //时钟同步
    firmware: "固件升级", //固件升级
    reconnection: "重连", //重连
    cancelUpgrade: "Cancel Upgrade", //取消升级
    netPara: "网络参数" //网络参数
  },

  //固件升级
  fotaPage: {
    firmwareCode: "固件编码", //固件编码     升级编号
    version: "版本号", //版本号
    versionSeq: "版本序号", //版本序列  版本序号
    publisher: "发布人", //发布人
    release: "发布时间", //发布时间
    download: "下载" //下载
  },

  //系统管理-角色
  roelPage: {
    roleCode: "角色编码", //角色编码
    roleName: "角色名称" //角色名称
  },

  //系统管理-用户
  userPage: {
    userCode: "用户编码", //用户编码
    realName: "真实姓名", //真实姓名
    dateBirth: "出生年月", //出生年月
    gender: "性别", //性别
    genderEnum: {
      male: "男性", //男性
      female: "女性" //女性
    }
  },

  //系统管理-功能
  functionPage: {
    functionCode: "功能编码", //功能编码
    functionName: "功能名称", //功能名称
    englishName: "英文名称", //英文名称
    functionType: "功能类型", //功能类型
    system: "所属系统" //所属系统
  },

  //系统管理-字典
  dictionaryPage: {
    dictionaryCode: "字典编码", //字典编码
    dictionaryName: "字典名称" //字典名称
  },

  //系统管理-参数
  parameterPage: {
    parameterName: "参数名称", //参数名称
    parameterCode: "参数编码", //参数编码
    parameterValue: "参数值" //参数值
  },

  /** 系统管理模块 */
  sys: {
    /** 机构管理模块 */
    org: {},
    /** 用户管理模块 */
    user: {
      userId: "用户编码", //用户编码
      realName: "真实姓名", //真实姓名
      gender: "性别", //性别
      birthday: "出生年月", //出生年月
      address: "地址", //地址
      phone: "电话", //电话
      email: "电子邮箱" //电子邮箱
    },
    /** 角色管理模块 */
    role: {},
    /** 功能管理模块 */
    func: {},
    /** 接口管理模块 */
    api: {},
    /** 地区管理模块 */
    area: {},
    /** 字典管理模块 */
    dict: {},
    /** 参数管理模块 */
    param: {
      paramLabel: "ParamLabel",
      paramKey: "ParamKey",
      paramValue: "ParamValue",
      description: "Description",
      enable: "IsEnable",
      inParamLabel: "Please enter the ParamLabel",
      inParamKey: "Please enter the ParamKey",
      inParamValue: "Please enter the ParamValue",
      inDescription: "Please enter the Description",
      addParam: "AddParam",
      viewParam: "ViewParam",
      modParam: "ModifyParam",
      paramLabelNotEmpty: "The ParamLabel cannot be empty",
      paramKeyNotEmpty: "The ParamKey cannot be empty"
    },

    /** 日志管理模块 */
    log: {},
    /** 板块管理模块 */
    bucket: {},
    /** 附件管理模块 */
    attach: {},
    /** 版本管理模块 */
    appVersion: {}
  }
};
