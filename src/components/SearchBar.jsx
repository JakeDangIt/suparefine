import React from "react";

const SearchBar = () => {
    const styles = {
        searchBar: {
            display: 'flex',
            alignItems: 'center',
        },
        input: {
            flex: 1,
            border: 'none',
            outline: 'none',
            backgroundColor: 'none',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '3.125rem',
            opacity: '0.5',
            background: '#AFAFAF',
            width: '20rem',
            height: '1rem ',
            flexShrink: '0',
            textAlign: 'left',
            padding: '1rem',
            color: '#000',
            fontSize: '1rem',
            fontWeight: '600',
        },
        button: {
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '1.25rem',
            padding: '0.3125rem 0.625rem',
            marginLeft: '0.625rem',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.searchBar}>
            <input type="text" placeholder="search for recipes" style={styles.input} />
            <button style={styles.button}>Search</button>
        </div>
    );
};

export default SearchBar;
