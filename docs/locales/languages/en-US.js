/**
 * 英文语言包
 */

export default {
  /** 系统主体框架信息 */
  main: {
    lang: "English", //英文
    title: "AFS Management", //AFS管理系统
    manager: "Management System", //管理系统
    monitor: "Monitoring System", //监控系统
    userInfo: "User Info", //用户信息
    modPwd: "Change Password", //修改密码
    notLogin: "Not Login", //未登录
    confirmExit: "Are you sure to exit the current system?", //确定退出当前系统吗？
    exitSystem: "Exit system", //退出系统
    inUsername: "Please enter user name", //请输入用户名
    inPassword: "Please enter the password", //请输入密码
    login: "Login", //登录
    oldPwd: "Old Password", //旧密码
    newPwd: "New Password", //新密码
    cfmPwd: "Confirm Password", //确认密码
    inOldPwd: "Please enter the old password", //请输入旧密码
    inNewPwd: "Please enter a new password", //请输入新密码
    inCfmPwd: "Please enter confirm password", //请输入确认密码
    oldPwdNotEmpty: "Old password cannot be empty", //旧密码不能为空
    newPwdNotEmpty: "New password cannot be empty", //新密码不能为空
    cfmPwdNotEmpty: "Confirm password cannot be empty", //确认密码不能为空
    pwdLenRange: "Please enter a password of 6-24 characters", //请输入6-24位字符的密码
    pwdNotMatch: "Password not match!", //密码不一致！
    pwdModSuccess: "Password modify successfully!", //密码修改成功！
    welcome: "Welcome to " //欢迎光临
  }, //通用标签，按钮，文本

  /** 通用操作信息 */
  operate: {
    operate: "Operation", //操作
    name: "Name",
    add: "New", //新增
    view: "View", //查看
    details: "Details", //查看详情
    mod: "Edit", //修改
    del: "Delete", //删除
    cancel: "Cancel", //取消
    confirm: "Confirm", //确认
    sequence: "Sequence Number", //序号
    refresh: "Refresh", //刷新
    start: "Start", //启动
    stop: "Stop", //停止
    maximize: "Maximize", //最大化
    minimize: "Minimize", //最小化
    reduction: "Reduction", //减少
    submit: "Submit", //提交
    next: "Next", //下一步
    previous: "Previous", //上一步
    back: "Back", //返回
    import: "Import", //导入
    export: "Export", //导出
    print: "Print", //打印
    search: "Search", //搜索
    query: "Query", //查询
    save: "Save", //保存
    yes: "Yes", //确定
    editPort: "Port Edit", //编辑端口
    reset: "Reset", //重置
    zoomOut: "Zoom out", //缩小
    zoomIn: "Zoom in", //放大
    offline: "Offline", //离线
    online: "Online", //在线
    await: "Await", //待机
    fiberConnect: "Optical Fiber Connecting", //移纤
    test: "Test", //测试
    authorization: "authorization", //授权
    damage: "Damage", //损坏
    channel: "channel", // 通道

    deviceType: "Device Type", //设备类型
    region: "Region", //所属区域

    stationName: "Station Name", //站点名称
    stationCode: "Station Code", //站点编码
    stationStatus: "Station Status", //站点状态
    equipmentRoom: "Equipment Room", //机房名称
    equipmentRoomCode: "Equipment Room Code", //机房编码
    deviceName: "Device Name", //设备名称
    deviceCode: "Device Code", //设备编码
    resourceCode: "Resource Code", //资源编码
    model: "Model", //设备型号
    regionStationRoom: "Region/Station/Room", //区域/站点/机房

    aEndDeviceNameCode: "A-end Device Name/Code", //A端设备名称/编码
    zEndDeviceNameCode: "Z-end Device Name/Code", //Z端设备名称/编码
    aEndDeviceName: "A-end Device Name", //A端设备名称 起始端设备名称
    aEndDeviceCode: "A-end Device Code", //A端设备编码
    aEndDevicePort: "A-end Device Port", //A端设备端口
    zEndDeviceName: "Z-end Device Name", //Z端设备名称 终止端设备名称
    zEndDeviceCode: "Z-end Device Code", //Z端设备编码
    zEndDevicePort: "Z-end Device Port", //Z端设备端口
    serviceNameCode: "Service Name/Code", //业务名称/编码
    aEndRegion: "A-end Region", //A端区域
    zEndRegion: "Z-end Region", //Z端区域
    aEndStationRoom: "A-end Station/Room", //A站点/机房
    zEndStationRoom: "A-end Station/Room", //Z站点/机房

    aEndRegionStationRoom: "A-end Region/Station/Room", //A端区域/站点/机房  起始端区域/站点/机房
    aEndDevice: "A-end Device", //A端设备    统一更换A端设备名称 开始端设备
    intermediateNode: "Intermediate Node", //中间节点
    zEndRegionStationRoom: "Z-end Region/Station/Room", //Z端区域/站点/机房 终止端区域/站点/机房
    zEndDevice: "Z-end Device", //Z端设备    统一更换Z端设备名称 结束端设备

    aEndConnectedDevice: "Z-end Connected Device", //A端连接设备
    zEndConnectedDevice: "A-end Connected Device", //Z端连接设备

    routeInfo: "Route Info", //路由信息
    startFibreConnect: "Fibre Connect Task Started!", //已启动移纤任务！

    fail: "Failure", //故障
    standby: "Standby", //备用
    idle: "Idle", //空闲
    port: "Port", //端口

    routeNameCode: "Route Name/Code", //路由名称/编码
    routeName: "Route Name", //路由名称
    routeCode: "Route Code", //路由编码
    channelName: "Channel Name", //通道名称
    pleaseEnterRouteNameCode: "Please enter route name/code", //请输入路由名称/编码
    //端口状态

    selectedPort: "Selected Port", //选中端口
    idlePort: "Idle Port", //空闲端口
    serviceAvailable: "Active(Service Available)", //主用(业务已通)
    standbyPort: "Standby Port", //备用端口
    serviceUnavailable: "Active(Service Unavailable)", //主用(业务未通)
    linkFailure: "Link Failure", //链路故障
    damagedPort: "Damaged Port", //损坏端口
    loopbackPort: "Loopback Port", //环回端口
    creator: "Creator", //创建人
    creationTime: "Creation Time", //创建时间

    subRack: "Sub-rack", //子架
    slot: "Slot", //槽位
    selected: "Selected", //选中
    sendReceive: "Send/Receive", //收/发
    send: "Send", //发送
    receive: "receive", //接收
    pleaseSelect: "Please Select ", //请选择
    startTime: "Start Time", //开始时间
    endTime: "End Time", //结束时间
    regionTree: "Region Tree", //区域树，站点树 区域站点树
    step1: "Step 1", //步骤1
    step2: "Step 2", //步骤2
    step3: "Step 3", //步骤3
    enterConfirm: "Press enter to confirm", //按回车键确认  面数，板卡，槽位数字输入
    surfaceName: "Surface Name", //面名称
    nominalCapacity: "Nominal Capacity", //标称容量
    installedCapacity: "Installed Capacity", //已安装容量
    subRackNumber: "'Number of subRack", //子架数
    subRackName: "SubRack Name", //子架名称
    slotNumber: "Number of slot", //槽位数
    registrationTime: "Registration Time", //注册时间
    startStatus: "Start Status", //启动状态
    updateStatus: "Update Status", //升级状态
    logStatus: "Log Status", //日志上报状态
    connected: "Connected", //成端
    connectedNumber: "Number of connected", //成端数
    noData: "No data", //暂无数据,无数据
    slotNmae: "Slot Name", //槽位名称
    pleaseSelectMsg: "Please Select {msg}", //请选择    组合消息拼接用
    pleaseInputMsg: "Please Input {msg}", //请输入    组合消息拼接用

    okYes: "Yes", //是
    okNo: "No", //否
    with: "With", //有
    without: "without", //无
    all: "All", //全部
    isBoardOn: "Board On?", //是否插板卡
    isOpticalBoard: "Optical Board?", //是否为光板
    portCapacity: "Port Capacity", //端口容量  光板端口容量
    portInfo: "Port Info", //光板端口信息  端口信息
    portDetails: "Port Details", //端口详情
    isModuleOn: "Optical Module On?", //是否插光模块
    interfaceType: "Interface Type", //模块接口类型 接口类型
    moduleType: "Module Type", //模块类型
    rate: "Module Rate", //模块速率
    wavelength: "Wavelength", //模块波长
    currentData: "Current data", // 当前数据
    Apply: "Apply", // 应用
    down: "Move down", // 下移
    up: "Move up", // 上移

    startDate: "Start Date", //开始日期
    endDate: "End Date" //结束日期
  },

  /** 通用 **/

  general: {
    estimatedTime: "estimatedTime",
    second: "second"
  },

  /** GIS信息 */
  gis: {
    vector: "Vector", //矢量
    image: "Image", //影像
    terrain: "Terrain", //地形
    tools: "Tools", //工具
    distance: "Distance measurement", //测距
    area: "Area measurement", //测面
    clear: "Clear", //清除
    fullScreen: "FullScreen" //全屏
  },

  /** 通用提示信息 */
  tip: {
    inKeyword: "Please enter key words", //请输入关键字
    confirmDelete: "Are you sure to delete this record?", //确认删除该条记录吗？
    deleteSuccess: "Delete successfully!", //删除成功！
    saveSuccess: "Save successfully!", //保存成功！
    unknownError: "Unknown error", //未知错误
    operateSuccess: "Operate successfully!", //操作成功！
    updateSuccess: "Update successfully!", //获取成功！刷新成功
    modifySuccess: "Modify successfully!", //修改成功！
    deletefailed: "Delete failed!", //删除失败！
    savefailed: "Save failed!", //保存失败！
    operatefailed: "Operate failed!", //操作失败！
    updatefailed: "Update failed!", //获取失败！刷新失败
    requestfailed: "Request failed!", //请求失败！
    requestSuccess: "Request successfully!", //请求成功！ 查询成功
    onlyEnglishNumber: "English, Numbers and Underlines only", //只能为英文、数字、下划线
    msgNameNotEmpty: "{msg} name cannot be empty", //名称不能为空     注意需要传递消息msg
    msgTypeNotEmpty: "{msg} type cannot be empty", //类型不能为空     注意需要传递消息msg
    msgNotEmpty: "{msg} cannot be empty", //不能为空     注意需要传递消息msg
    msgInvalidFormat: "Invalid {msg} format", //格式错误     注意需要传递消息msg
    pleaseSelectDevType: "Please select device type", //请选择设备类型
    netTestSuccessful: "Network test successful", // 网络测试成功
    connectionSuccessfully: "Connection established successfully", // 连接关系建立成功 连接关系建立完成

    modifyfailed: "Modify failed!" //修改失败！
  },

  /** 执行结果下拉 */
  runResult: {
    all: "All", //全部
    succes: "Succes", //执行成功
    failure: "Failure", //执行失败
    stopped: "Stopped", //已经停止
    running: "Running", //正在执行       (移纤/OTDR测试等非空闲状态）
    waiting: "Waiting" //等待执行
  },

  //运行状态
  runStatus: {
    all: "All", //全部
    completed: "Completed", //执行完成
    stopped: "Stopped", //已经停止
    running: "Running", //正在执行
    waiting: "Waiting" //等待执行
  },

  /** 操作结果下拉 */
  operationResult: {
    all: "All", //全部
    succes: "Succes", //成功
    failure: "Failure" //失败
  },

  /** 确认状态 */
  alarmConfirmStatus: {
    all: "All", //全部
    confirmed: "Confirmed", //已确认
    unconfirmed: "Unconfirmed" //未确认
  },

  /** 设备类型枚举 */
  deviceTypeEnum: {
    afs: "AFS", //AFS设备
    odf: "Optical Distribution Frame", //ODF架
    onu: "Optical Cable Cross Connection Cabinet", //光交箱
    transmission: "Transmission Equipment", //传输设备
    opticalCable: "Optical Cable" //光缆
  },

  //时间段
  timePeriodEnum: {
    lastFiveM: "The last five minutes", //最近五分钟
    lastHour: "The last hour", //最近一小时
    lastDay: "The last day", //最近一天
    lastWeek: "The last week", //最近一周
    lastMonth: "The last month", //最近一月
    lastYear: "The last year" //最近一年
  },

  //告警等级枚举
  alarmLevEnum: {
    all: "All", //全部
    critical: "Critical", //一级告警
    major: "Major", //二级告警
    minor: "Minor", //三级告警
    warning: "Warning" //四级告警
  },

  //在线状态
  onlineStatusEnum: {
    all: "All", //全部
    online: "Online", //在线
    offline: "Offline" //离线
  },

  //授权状态
  authorizedStatusEnum: {
    authorized: "Authorized", //已授权
    unauthorized: "unauthorized" //未授权
  },

  //是否启用
  enableDisableEnum: {
    enable: "Enable", //启用
    disable: "Disable" //禁用
  },

  //首页
  homePage: {
    deviceStatusStatistics: "Device Status Statistics", //设备状态统计
    runningStatistics: "Running Status Statistics", //运行状态统计
    serviceChannnel: "Service Routing Channel", //业务路由通道
    resourcesStatistics: "Resources Statistics", //资源统计
    allRegion: "All Regions", //全部区域
    idleRoute: "Idle Channel", //空闲路由通道,空闲通道
    standbyRoute: "Standby Routing channel", //备用路由通道
    faultRouteChannel: "Failed Routing channel" //故障路由通道
  },

  //设备添加，光缆添加，网络节点
  deviceMangerPage: {
    addeNode: "New Network Node", //新增通信网络节点
    viewNode: "View Network Node", //查看通信网络节点
    editNode: "Edit Network Node", //修改通信网络节点
    flangeType: "Flange Type", //法兰盘类型
    surfaceNumber: "Number of surface", //面数
    custom: "Custom", //自定义
    inputPortNumber: "Number of input ports", //输入端口数
    outputPortNumber: "Number of output ports", //输出端口数
    opticalBoard: "Fiber module board", //光板
    portDetails: "Port Details", //端口详细
    cableCode: "Cable Code", //光缆编号
    cableName: "Cable Name", //光缆名称
    cableLevel: "Cable Level", //光缆级别
    cableType: "Cable Type", //光缆类型
    cableSpe: "Cable Specifications", //光缆规格
    fiberCoreType: "Fiber Core Type", //纤芯类型
    segmentInfo: "Segment Info", //网段信息
    segmentCode: "Segment Code", //网段编号
    segmentNmae: "Segment Name", //网段名称
    segmentType: "Segment Type", //网段类型
    aEendPort: "A-end Port", //A向端口
    zEendPort: "Z-end Port", //A向端口
    fiberCore: "Fiber Core", //纤芯
    connectViaCable: "Connect via optical cable?", //是否通过光缆连接
    pleaseSelCable: "Please select cable" //请选择光缆
  },

  //实时监控 设备状态
  monitorPage: {
    deviceStatus: "Device Status", //设备状态
    authorizationStatus: "Authorization Status", //授权状态
    deviceIp: "Device IP", //设备IP
    firmvareVersion: "Firmware Version", //固件版本
    heartbeatTime: "Heartbeat Time", //心跳时间
    alarmStatus: "Alarm Status", //告警状态
    enterConfirmerDescription: "Please enter confirmer/description" //请输入确认人/确认描述/告警描述
  },

  //路由配置，路由图示
  routeConfigPage: {
    deleteStandbyRoute: "Delete Standby Route", //删除备用路由
    configStandbyRoute: "Configure Standby Route", //配置备用路由
    aEndServiceDevice: "A-end Service Device", //A端业务设备
    aEndServiceDevicePort: "A-end Service Device Port", //A端业务设备端口
    aEndAFSDevice: "A-end AFS Device", //A端AFS设备
    aEndAFSDevicePort: "A-end AFS Device Port", //A端AFS设备端口
    zEndServiceDevice: "Z-end Service Device", //Z端业务设备
    zaEndServiceDevicePort: "Z-end Service Device Port", //Z端业务设备端口
    zEndAFSDevice: "Z-end AFS Device", //Z端AFS设备
    zEndAFSDevicePort: "Z-end AFS Device Port", //Z端AFS设备端口
    standbyRouteNumber: "Number of standby routes", //备用路由数量
    selectRoute: "Select Route", //选择路由
    selectedService: "Selected Service", //已选业务
    routingGraphic: "Routing Graphic", //路由图示
    routeList: "Route List", //路由列表
    selectStandbyChannel: "Select Standby Routing Channel" //选择备用路由通道
  },

  //业务拓扑 故障路由，故障业务
  serviceTopologyPage: {
    associatedService: "Relevant Service", //关联业务
    faultService: "Failed Service", //故障业务
    associatedRoute: "Relevant Route", //关联路由
    faultRoute: "Failed Route", //故障路由
    faultChannel: "Failed Channel", //故障通道
    selectedServiceNameCode: "Service name and code of selected port", //所选端口对应业务名称与编码
    selectedPortName: "Name of selected port", //所选端口对应名称
    asAServicePort: "As A-end service device port", //作为A端业务设备端口
    asZServicePort: "As Z-end docking device port", //作为Z端业务设备端口
    asADockingPort: "As A-end docking device port", //作为A端连接设备端口
    asZDockingPort: "As Z-end docking device port", //作为Z端连接设备端口
    deviceDetail: "Device Details" //设备详情
  },

  //业务配置 智能开通，智能还原，智能恢复
  serviceConfigPage: {
    intelligentConnect: "Intelligent Connect", //智能开通

    recovery: "Intelligent Recovery", //智能恢复
    restore: "Intelligent Restore", //智能还原
    serviceTopology: "Service Topology", //业务拓扑
    serviceName: "Service Name", //业务名称
    ServiceCode: "Service Code", //业务编码
    ServiceStatus: "Service Status", //业务状态

    lessConnectTime: "Less Connect Time", //移纤时间短
    lessNode: "Fewer Nodes", //中间节点少
    lessLength: "Less Total Length", //光缆总长少
    lowLinkloss: "Lower Link Loss", //链路损耗小
    recommendation: "Recommendation", //推荐方案

    lastTestTime: "The last OTDR test time", //最近一次OTDR检测时间
    usedTime: "Fiber Connect Time", //移纤时长
    retestOtdr: "OTDR Test again?", //是否重新进行OTDR检测

    updatesState: "updates the original channel state to", //并将原通道状态更新为
    startConnectTask: "Start this fiber connect task?", //是否启动移纤任务？

    CurrentTime: "Current Time", //当前时间
    settingTime: "Setting Time", //设定时间
    setStartConnectTime: "Set the start time of fiber connect", //设定开始移纤时间
    locked: "Locked", //锁定状态
    isRecoveryAuto: "recovery automatically?", // 是否自动恢复
    isOtdrTestBeforeRec: "OTDR test before recovery?", // 恢复前是否OTDR测试
    channelDetails: "Channel Detail", // 备用通道详情
    uplink: "Uplink Devoce", // 上行设备
    downlink: "Downlink Devoce", // 下行设备
    normalChannel: "Normal channel", // 正常通道
    routeStartStopInfo: "Route start-stop info", // 路由起止端信息
    confirmDelteRoute: "Delete the selected route?", // 是否确认删除所选路由
    deleteRoute: "Delete Route", // 删除路由
    opRoute: "Optional Route", // 可选路由
    reSelectDevice: "No recommended route,Please reselect!", // 抱歉，该A端Z端下的设备暂无推荐路由！请重新选择设备
    azCannotSame: "A-end and Z-end devices cannot be the same!", // A端Z端设备不能相同
    pleaseEnterRouteName: "Please Enter Route Name", // 请填写路由名称
    atLeastOneRouite: "Please select at least one route", // 请至少选择一条路由
    conflict: "conflict?", // 是否有冲突
    isConflict: "Please enter whether there is a conflict", // 请输入是否有冲突
    enterCableLength: "Please enter the length of the optical cable", // 请输入光缆长度
    enterZendNodeType: "Please Enter Z-end Node Type", // 请输入Z端节点类别
    enterZendNodeCode: "Please Enter Z-end Node Code", // 请输入Z端节点编号
    enterZendRegionCode: "Please Enter Z-end Region Code", // 请输入Z端区域编号
    newRoute: "New Route", // 新增路由
    viewRoute: "View Route", // 查看路由
    editRoute: "Edit Route", // 修改路由
    pEnterRouteCode: "Please enter the route code", // 请输入路由编号
    lastOtdrTestTime: "The last OTDR test time", // 最近一次OTDR测试时间
    deleteStandbyRouteforService: "Delete Standby route for the service?", // 是否确认删除所选业务所对应的备用路由
    newStandbyRoute: "New Standby Route", // 新增备用路由
    deleteStandbyRoute: "Delete Standby Route", // 删除备用路由
    otdrTestAgain: "OTDR Test again", // 重新OTDR测试
    recoveryAuto: "Recovery automatically", // 自动恢复
    minimumLinkLoss: "Minimum Link Loss" // 最低链损值
  },

  //手动测试
  manualTestPage: {
    manualTest: "Manual OTDR Test", //OTDR手动测试
    channelNumber: "Total Number of channels", //通道数量 误以为通道号，
    serviceOccupied: "Service Occupied", //业务占用
    standbyChannel: "Standby Channel", //备用通道
    idleChannel: "Idle Channel", //空闲通道
    totalTasksNumber: "Total number of tasks", //总任务数量
    aggregatePro: "Total completion", //总任务进度
    currentTask: "Current Task", //当前任务
    currentProgress: "Current Task Progress" //当前任务进度
  },

  //例测任务
  routineTestPage: {
    routingAfs: "AFS devices in routing", //路由中AFS设备---啥意思？
    fiberCoreNumber: "Fiber Core Number", //纤芯数
    testDesc: "Test Description", //测试描述
    testCycle: "Test Cycle", //测试周期
    testTime: "Daily Test Time" //每日测试时间段
  },

  //测试记录/曲线详情
  testRecordPage: {
    referenceCurve: "Whether it is a reference curve", //是否为参考曲线
    trendContrast: "Trend Contrast", //趋势对比
    afsPort: "AFS-Port", //AFS-端口
    direction: "Direction", //方向
    testTime: "Test Time", //测试时间
    eventsNumber: "Total number of Events", //事件总数
    cableLength: "Total length of Optical cable", //光缆总长度
    linkLoss: "Link loss", //链路损耗
    averageLoss: "Average Loss", //平均损耗
    testType: "Test Type", //测试类型
    testRange: "Test Range", //测试量程
    eventType: "Event Type", //事件类型
    linkLossdB: "Link Attenuation Loss(dB)", //链路衰减损耗(dB)
    reflectionLoss: "Reflection Attenuation Loss(dB)", //反射衰减损耗(dB)
    eventLoss: "Event Loss(dB)", //事件损耗(dB)
    distance: "Distance(m)", //距离(m)
    saveCurve: "Save as a reference curve" //保存为参考曲线
  },

  //AFS调控
  afsControlPage: {
    runningStatus: "Running Status", //运行状态
    onlineStatus: "Online Status", //在线状态
    enterNameCode: "Please enter device name/code", //请输入设备名称/设备编码
    firmwareVersion: "Firmware Version" //固件版本
  },

  //移纤/调控
  fiberControlPage: {
    operate: "Operate", //调控
    test: "Test", //检测
    selectedPortInfo: "Selected Port Info", //选定端口信息
    serviceInfo: "Service Info", //业务信息
    selectedPort: "Selected Port", //选定端口
    oppositeEquipment: "Opposite Terminal Equipment", //对端设备
    dockingPort: "Docking Port", //对接端口
    connection: "Establish a connection", //建立连接
    replace: "Replace", //更换
    relationship: "Connection Relationship", //连接关系
    synchronize: "Synchronize Configuration", //同步配置及连接关系
    interactionLog: "Interaction Log", //交互日志
    operationLog: "Operation Log" //操作日志
  },

  //OTDR测试/检测
  otdrTestPage: {
    testPara: "Test Parameters", //测试参数
    sampleFiber: "Fiber to be tested", //待测光纤
    jointLossThreshold: "Connector Loss Threshold(dB)", //接头损耗阈值(dB)
    wavelength: "Wavelength(mm)", //波长(mm)
    envReflectionThr: "Event Reflection Threshold(dB)", //事件反射阈值(dB)
    pulseWidth: "Pulse Width(ns)", //脉宽(ns)
    fiberEndThr: "Fiber End Threshold(dB)", //光纤末端阈值(dB)
    testRange: "Test Range(KM)", //测试量程(KM)
    correctionPara: "Correction Parameter", //光缆修正参数
    index: "Index", //折射率
    testNumber: "Number of tests", //测试次数
    testMode: "Test Mode", //测试模式
    netTest: "Net Test", //网络测试
    startTest: "Start Test", //启动测试
    opTestPara: "Optical Power Test Parameter", //光功率测试参数配置
    opticalPower: "Optical Power(dBm)", //光功率(dBm)
    testModeEnum: {
      authorized: "Average Test", //平均测试
      autoTest: "AutoTest", //自动测试
      realtimeTest: "Real-time Test" //实时测试
    },
    testLog: "Test Logs"
  },

  //AFS任务
  afsTaskPage: {
    afsNameCode: "AFS Name/Code", //AFS名称/编码
    afsName: "AFS Name", //AFS设备名称
    afsCode: "AFS Code", //AFS设备编码
    taskType: "Task Type", //任务类型
    taskDesc: "Task  Description", //任务描述
    subtasksNumber: "Total Number of subtasks", //子任务总数
    waiting: "Waiting", //等待执行
    executionStatus: "Execution Status", //执行状态
    executionResult: "Execution Result", //执行结果
    ScheduledStartTime: "Scheduled Start Time", //计划开始时间
    progress: "Progress", //执行进度
    endTime: "End Time" //执行结束时间
  },

  //哑资源管理 //AFS配置
  dumbResourcesPage: {
    equipmentModel: "Equipment Model", //设备型号
    vendor: "vendor", //生产厂商 厂商/品牌
    inputTime: "Input Time" //录入时间
  },

  //设备连接关系配置页面连接详情1页面   //连接详情2页面 //图形化配置
  deviceConnectionsInfoPage: {
    connectionNumber: "Number of connections", //连接数
    graphicsConfig: "Graphics Configuration", //图形化配置
    aEndDeviceZendPort: "A-end Device Z-end Port(core)", //A端设备Z向端口(纤芯)
    aEndDeviceAendPort: "A-end Device A-end Port(core)", //A端设备A向端口(纤芯)
    zEndDeviceZendPort: "Z-end Device Z-end Port(core)", //Z端设备Z向端口(纤芯)
    zEndDeviceAendPort: "Z-end Device A-end Port(core)", //Z端设备A向端口(纤芯)
    line: "Line" //连接线
  },

  //历史告警页面 实时告警，
  historicalalarmHPage: {
    alarmLevel: "Alarm Severity", //告警等级
    confirmStatus: "Confirm Status", //确认状态
    alarmName: "Alarm Name", //告警信号名称
    triggerValue: "Trigger Value", //触发值
    alarmStartTime: "Alarm Start Time", //告警开始时间
    alarmEndTime: "Alarm End Time", //告警恢复时间
    alarmConfirmTime: "Alarm Confirm Time", //告警确认时间
    alarmCancelTime: "Alarm Cancel Time", //告警取消时间
    alarmConfirm: "Alarm Confirm", //告警确认
    alarmCancel: "Alarm Cancel", //告警取消
    alarmConfirmPrompt: "Confirm the selected current alarm?", //是否确认所选当前告警？
    enterAlarmConfirmReason: "Please enter alarm confirm reason", //请填写确认告警原因
    alarmCancelPrompt: "Cancel the selected current alarm?", //是否取消所选站点的当前告警？
    enterAlarmCancelReason: "Please enter alarm cancel reason", //请填写取消告警原因
    alarmConfirmor: "Alarm Confirmor" //告警确认人
  },

  //系统日志页面
  systemLogPage: {
    operationResult: "Operation Result", //操作结果
    operationTime: "Operation Time", //操作时间
    operationUserModule: "Please enter operation user/module", //请输入操作用户/操作模块
    operationUser: "Operation User", //操作用户
    operationModule: "Operation Module", //操作模块
    operationName: "Operation Name", //操作名称
    operationDescription: "Operation Description", //操作描述
    operationIp: "Operation IP" //操作端IP
  },

  //设备日志页面
  deviceLogPage: {
    logType: "Log Type", //日志类型
    logSeq: "Log Sequence", //日志序号
    logInfo: "Log Info", //日志信息
    recordTime: "Record Time" //记录时间
  },

  //门限配置
  alarmStrategyPage: {
    alarmStrategy: "Alarm Strategy", //门限配置
    linkLoss: "Link Loss Threshold", //链路损耗门限
    averageLoss: "Average Loss Threshold", //平均损耗门限
    tipLength: "Tip Length Threshold" //末端长度门限
  },

  //工单查询页面---------------------------------------------------------
  workOrderPage: {
    workOrderNameCode: "Order(Service)Name/Code", //工单(业务)名称/编码
    workOrderName: "Order(Service)Name", //工单(业务)名称
    receivingTime: "Received Time", //接收时间
    orderType: "Order Type", //工单类型
    confirmTime: "Confirm Time", //确认时间
    confirmor: "Confirmor", //确认人
    urgency: "Urgency", //紧急程度
    orderStatus: "Order Status", //工单状态
    orderTypeEnum: {
      all: "All", //全部
      establishService: "Establish  Service", //开通业务
      recoveryService: "Recovery Service" //恢复业务
    }
  },

  //系统管理-机构
  orgPage: {
    orgCode: "Organization Code", //机构编码
    orgName: "Organization Name", //机构名称
    contacts: "Contacts", //联系人
    contactsNumber: "Contact Number", //联系电话/手机号码
    email: "Email", //电子邮箱
    address: "Address", //地址/家庭住址/联系地址
    displayOrder: "Display Order", //显示顺序
    maneger: "Maneger", //负责人
    departmentType: "Department Type", //部门类型
    orgType: "Organization Type", //组织类型
    department: "Department", //部门，所属部分
    fax: "fax" //传真
  },

  //设备操控
  deviceCtrlPage: {
    netWorkMode: "NetWork Mode", //网络模式
    subnetMask: "Subnet Mask", //子网掩码
    gateway: "Gateway", //网关
    deviceIp: "Device IP", //本地IP ,设备IP
    devicePort: "Device Port", //本地端口 设备端口
    serverPort: "Server Port", //远程端口 服务器端口
    serverIp: "Server IP", //远程IP 服务器IP
    command: "Command", //指令控制
    clockSync: "Clock Sync", //时钟同步
    firmware: "Firmware Upgrade", //固件升级
    reconnection: "Reconnection", //重连
    cancelUpgrade: "Cancel Upgrade", //取消升级
    netPara: "Network Parameter" //网络参数
  },

  //固件升级
  fotaPage: {
    firmwareCode: "Firmware Code", //固件编码     升级编号
    version: "Version", //版本号
    versionSeq: "Version Sequence", //版本序列  版本序号
    publisher: "Publisher", //发布人
    release: "Release Time", //发布时间
    download: "Download" //下载
  },

  //系统管理-角色
  roelPage: {
    roleCode: "Role Code", //角色编码
    roleName: "Role Name" //角色名称
  },

  //系统管理-用户
  userPage: {
    userCode: "User Code", //用户编码
    realName: "Name", //真实姓名
    dateBirth: "Date of Birth", //出生年月
    gender: "Gender", //性别
    genderEnum: {
      male: "Male", //男性
      female: "female" //女性
    }
  },

  //系统管理-功能
  functionPage: {
    functionCode: "Function Code", //功能编码
    functionName: "Function Name", //功能名称
    englishName: "English Name", //英文名称
    functionType: "Function Type", //功能类型
    system: "Subordinate System" //所属系统
  },

  //系统管理-字典
  dictionaryPage: {
    dictionaryCode: "Dictionary Code", //字典编码
    dictionaryName: "Dictionary Name" //字典名称
  },

  //系统管理-参数
  parameterPage: {
    parameterName: "Parameter Name", //参数名称
    parameterCode: "Parameter Code", //参数编码
    parameterValue: "Parameter Value" //参数值
  },

  /** 系统管理模块 */
  sys: {
    /** 机构管理模块 */
    org: {},
    /** 用户管理模块 */
    user: {
      userId: "Username",
      realName: "RealName",
      gender: "Gender",
      birthday: "Birthday",
      address: "Address",
      phone: "Phone",
      email: "Email"
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
