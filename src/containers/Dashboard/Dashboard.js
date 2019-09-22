import React from 'react';
import './Dashboard.css';
import { Search, Character, CharacterDetails, LoadIndicator } from 'components';
import { debounce } from 'lodash';
import { pageSize, search, loadMore } from 'services/data-provider';

class Dashboard extends React.PureComponent {
  state = {
    searchPattern: '',
    isLoading: false,
    items: [],
    count: 0,
    nextUrl: null,
    isLoadingMore: false,
    selectedIndex: -1
  };

  get isNoItemsFound() {
    return this.state.items.length === 0 && this.state.searchPattern !== '';
  }

  get numberOfLeftItems() {
    return Math.min(pageSize, this.state.count - this.state.items.length);
  }

  get characterDetails() {
    return this.state.selectedIndex !== -1 && <CharacterDetails data={this.state.items[this.state.selectedIndex]} />;
  }

  get items() {
    if (this.state.isLoading) {
      return <LoadIndicator />;
    }
    if (this.isNoItemsFound) {
      return <span className="no-items">No characters found</span>;
    }
    return (
      <ul>
        {this.state.items.map((character, i) => {
          return (
            <li key={character.name}>
              <Character
                name={character.name}
                onClick={() => this.selectItem(i)}
                isSelected={this.state.selectedIndex === i}
              />
            </li>
          );
        })}
        {this.loadMoreButton}
      </ul>
    );
  }

  get loadMoreButton() {
    if (!this.state.nextUrl) {
      return null;
    }
    const content = this.state.isLoadingMore
      ? 'Loading...'
      : `Load next ${this.numberOfLeftItems} (loaded ${this.state.items.length} out of ${this.state.count})`;
    return (
      <li key={'loadMore'}>
        <Character name={content} onClick={this.loadMoreRequest} />
      </li>
    );
  }

  selectItem(index) {
    this.setState({
      selectedIndex: index
    });
  }

  updateSearchPattern = searchPattern => {
    this.setState({
      searchPattern,
      isLoading: true,
      selectedIndex: -1
    });

    this.searchRequestDebounce(searchPattern);
  };

  searchRequest = async pattern => {
    if (pattern === '') {
      this.setState({
        isLoading: false,
        items: [],
        nextUrl: null,
        count: 0
      });
      return;
    }
    const { count, nextUrl, items } = await search(pattern);
    this.setState({
      isLoading: false,
      items,
      count,
      nextUrl
    });
  };

  searchRequestDebounce = debounce(this.searchRequest, 1000);

  loadMoreRequest = async () => {
    this.setState({
      isLoadingMore: true
    });
    const { count, nextUrl, items } = await loadMore(this.state.nextUrl);
    this.setState({
      isLoadingMore: false,
      items: this.state.items.concat(items),
      count,
      nextUrl
    });
  };

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-main">
          <Search
            value={this.state.searchPattern}
            onChange={this.updateSearchPattern}
            placeholder="Start typing here for search"
          />
          <div className="search-results">{this.items}</div>
        </div>
        <div className="dashboard-details">{this.characterDetails}</div>
      </div>
    );
  }
}

export { Dashboard };
