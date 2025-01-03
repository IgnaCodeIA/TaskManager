import React from 'react';
import './TodosLoading.css';

function TodoLoading() {
  return (
    <div className="TodoLoading">
      <div className="TodoLoading-item">
        <div className="TodoLoading-icon"></div>
        <div className="TodoLoading-text"></div>
        <div className="TodoLoading-delete"></div>
      </div>
      <div className="TodoLoading-item">
        <div className="TodoLoading-icon"></div>
        <div className="TodoLoading-text"></div>
        <div className="TodoLoading-delete"></div>
      </div>
      <div className="TodoLoading-item">
        <div className="TodoLoading-icon"></div>
        <div className="TodoLoading-text"></div>
        <div className="TodoLoading-delete"></div>
      </div>
    </div>
  );
}

export { TodoLoading };