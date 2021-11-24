import '../sass/SearchBar.scss';
import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super()
    }

    
    render() {
        return(
            <div className={`search-bar ${this.props.isBtnClicked ? this.props.searchVisible : ''}`}>
                <form action="">
                    <input type="text" placeholder="Search"/>

                    <button className="material-icons js-btn-close" onClick={this.props.btnSearchEvent}>
                        close
                    </button>
                </form>
            </div>
        )
    }
}


export default SearchBar;