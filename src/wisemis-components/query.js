/**
 * 生成查询对象
 */
function Query(){
    this.where={};
    this.sort={};
    this.skip=0;
    this.limit=10;
}

export default new Query();