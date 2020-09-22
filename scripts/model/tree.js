import Node from './node.js'
export default class Btree {
  constructor() {
    this.root = null;
  }

  addAux(nodeNew, nodeAux) {
    if (nodeNew.info < nodeAux.info) {
      if (nodeAux.left === null) {
        nodeAux.left = nodeNew;
      } else {
        this.addAux(nodeNew, nodeAux.left);
      }
    } else {
      if (nodeAux.right === null) {
        nodeAux.right = nodeNew;
      } else {
        this.addAux(nodeNew, nodeAux.right);
      }
    }
  }
  //agregar nodo
  add(info) {
    var nodeAux = new Node(info);
    if (this.root == null) {
      this.root = nodeAux;
    }else if(this.root.info != info){
      this.addAux(nodeAux, this.root);
    }
  }


// 
  searchLeaf(leaf,pos=this.root){
    if(pos != null){
      this.searchLeaf(leaf,pos.left)
      if(!pos.left && !pos.right){
        leaf.push(pos.info)
        return leaf
      }
      this.searchLeaf(leaf,pos.right)
    }
    return leaf
    }
} 


