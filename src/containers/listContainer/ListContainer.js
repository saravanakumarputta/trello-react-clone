import React from 'react';
import { connect } from 'react-redux';

import './ListContainer.css';

import Card from '../../components/card/Card';
import TextBox from '../../components/textBox/TextBox';
import Button from '../../components/button/Button';
import FreezeLayer from '../../components/freezeLayer/FreezeLayer';

import CommentsContainer from '../commentContainer/CommentsContainer';

import { addCard, deleteCard, updateCard } from '../../actions/CardActions';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: '',
      cardDesc: '',
      showEditFreezeLayer: false,
      editCardId: null,
      showCommentFreezeLayer: false,
      addDisabled: true
    };
    this.handleDelClick = this.handleDelClick.bind(this);
    this.cardTitleChange = this.cardTitleChange.bind(this);
    this.cardDesChange = this.cardDesChange.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.closeEditForm = this.closeEditForm.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.commentHandler = this.commentHandler.bind(this);
    this.closeCommentForm = this.closeCommentForm.bind(this);
  }

  svgStyle = {
    width: '24px',
    height: '24px'
  }
  handleDelClick() {
    this.props.deleteHandler(this.props.listId)
  }

  cardTitleChange(title) {
    this.setState({
      cardTitle: title
    })
    if (title) {
      this.setState({
        addDisabled: false
      })
    } else {
      this.setState({
        addDisabled: true
      })
    }
  }

  cardDesChange(title) {
    this.setState({
      cardDesc: title
    })
  }

  addCard() {
    let id = new Date().getTime().toString();
    let cardData = {
      id,
      title: this.state.cardTitle,
      desc: this.state.cardDesc,
      commentIds: []
    };
    this.props.addCard({
      card: {
        [id]: cardData,
      },
      cardId: id,
      listId: this.props.listId,
    });

    this.setState({
      cardTitle: '',
      cardDesc: '',
      addDisabled: true
    })
  }

  deleteCard(cardId) {
    this.props.deleteCard({ listId: this.props.listId, cardId: cardId });
  }

  editHandler(cardId) {
    this.setState({
      showEditFreezeLayer: true,
      cardTitle: this.props.cards[cardId].title,
      cardDesc: this.props.cards[cardId].desc,
      editCardId: cardId
    })
  }

  updateCard() {
    this.props.updateCard({
      card: {
        id: this.state.editCardId,
        title: this.state.cardTitle,
        desc: this.state.cardDesc,
        commentIds: this.props.cards[this.state.editCardId].commentIds
      }
    })

    this.setState({
      cardDesc: '',
      cardTitle: '',
      showEditFreezeLayer: false,
      addDisabled: true
    })
  }

  closeEditForm() {
    this.setState({
      cardDesc: '',
      cardTitle: '',
      showEditFreezeLayer: false
    })
  }

  commentHandler(cardId) {
    console.log(cardId);
    this.setState({
      showCommentFreezeLayer: true,
      editCardId: cardId
    })
  }

  closeCommentForm() {
    this.setState({
      showCommentFreezeLayer: false,
    })
  }

  render() {
    let { cardIds, cards } = this.props;

    return (
      <div className="dflex flexcolumn h100 listContainer marginR20">
        <div className="flexshrink">
          <div className="dflex flexrow alignVertical listHeader">
            <div className="flexgrow">{this.props.title}</div>
            <div className="flexshrink pointer" onClick={this.handleDelClick}>
              <svg style={this.svgStyle} viewBox="0 0 24 24">
                <path fill="#000000" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flexgrow overflow-y-auto">
          {cardIds.map(cardId => {
            return <Card
              title={cards[cardId].title}
              cardId={cardId}
              key={cardId}
              deleteHandler={this.deleteCard}
              editHandler={this.editHandler}
              commentHandler={this.commentHandler} />
          })}
          {!this.state.showEditFreezeLayer ?
            <div className="dflex flexcolumn alignVertical">
              <div className="marginTB5">
                <TextBox placeholderText="Card Name" handleOnChange={this.cardTitleChange} value={this.state.cardTitle} />
              </div>
              <div className="marginTB5">
                <TextBox placeholderText="Card Desc" handleOnChange={this.cardDesChange} value={this.state.cardDesc} />
              </div>
              <div className="marginTB5">
                <Button text="Add" handleClick={this.addCard} disabled={this.state.addDisabled} />
              </div>
            </div> : null}
        </div>
        {this.state.showEditFreezeLayer ?
          < FreezeLayer >
            <div className="dflex flexcolumn alignVertical cardEditForm posrel">
              <div className="posab closeIcon pointer" onClick={this.closeEditForm}>X</div>
              <div className="marginTB5">
                <TextBox placeholderText="Card Name" handleOnChange={this.cardTitleChange} value={this.state.cardTitle} />
              </div>
              <div className="marginTB5">
                <TextBox placeholderText="Card Desc" handleOnChange={this.cardDesChange} value={this.state.cardDesc} />
              </div>
              <div className="marginTB5">
                <Button text="Update" handleClick={this.updateCard} disabled={this.state.addDisabled} />
              </div>
            </div>
          </FreezeLayer> : null}
        {this.state.showCommentFreezeLayer ?
          <FreezeLayer>
            <CommentsContainer cardId={this.state.editCardId} closeHandler={this.closeCommentForm} />
          </FreezeLayer> : null}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cards: state.cards || {},
    cardIds: state.lists[props.listId].cardIds || []
  }
}
export default connect(
  mapStateToProps, {
    addCard,
    deleteCard,
    updateCard
  }
)(ListContainer)
