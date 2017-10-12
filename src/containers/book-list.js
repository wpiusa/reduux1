import React, {Component} from 'react';
import { connect }from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
  	return this.props.books.map((book)=> {
      return(
        <li 
          key={book.title} 
          onClick={()=>this.props.selectBook(book)}
          className='list-group-item'>{book.title}</li>
      );
  	});
  }

  render() {
    return(
      <div>
        <ul className='list-group col-sm-4'>
          {this.renderList()}
        </ul>
      </div>
    )
  }

}

//anything returned from this function will end up as props on the booklist container

function mapStateToProps(state){
	return{
		books:state.books
	};
}

function mapDispatchToProps(dispatch){
  //whenever sleceltbook is called, the result should be passed to a all of reducers

  return bindActionCreators({ selectBook:selectBook },dispatch);
}

//promote booklist from a Component to a container- it need to know
//about new dispatch method, selectBook. Make it available as a prop.

export default connect(mapStateToProps,mapDispatchToProps)(BookList);