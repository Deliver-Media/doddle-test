import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList  } from 'react-native';
import { SearchBar } from 'react-native-elements';



function Search() {

    const [search, setSearch] = useState('');


  return (
    <View style={styles.searchContainer}>
        <SearchBar
          height={20}
          inputStyle={{backgroundColor: 'black'}}
          inputContainerStyle={{backgroundColor: 'black', borderRadius: 0}}
          containerStyle={{backgroundColor: 'white', borderWidth: 0, borderRadius: 0, borderColor: 'white', padding: 0}}
          placeholderTextColor={'white'}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search"
          value={search}
        />
        <FlatList
        //   data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
        //   ItemSeparatorComponent={ItemSeparatorView}
        //   renderItem={ItemView}
        />
      </View>
  )
}

const styles = StyleSheet.create({
    searchContainer: {
      backgroundColor: 'white',
    },
    itemStyle: {
      padding: 10,
    },
  });

export default Search