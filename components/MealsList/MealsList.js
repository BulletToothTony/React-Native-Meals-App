import React from 'react'
import { View, FlatList, StyleSheet} from 'react-native'
import MealItem from './MealItem';

const MealsList = ({items}) => {
    function renderMealItem(itemData) {
        const item = itemData.item;
    
        const mealItemProps = {
          title: item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration,
          id: item.id
        };
    
        function pressHandler() {
            navigation.navigate('MealDetails')
        }
        return (
            <MealItem {...mealItemProps} />
        );
      }
    
         
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
            // renderItem={(item) => <Text>{item.item.title}</Text>}
          />
        </View>
      );
}

export default MealsList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  