/**
 * 控制器
 * 思想：页面各组件都注册到控制器，声明事件类型，一旦触发事件，组件可以自动执行相关操作，这样做可以避免各组件之间互相调用
 * 各组件只需和控制器打交道，不需要关心别的组件如何运作
 */
function Controller(modelName){
    this.modelName=modelName;
    /**
     * 注册的组件
     */
    this.components=[];
    /**
     * 注册的事件
     * 来自事件模型
     */
    this.events=[]
}

export default Controller;