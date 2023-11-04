import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

import styles from './styles';

const DetailTab = ({ nameTab, onPress, flag }) => {

  return (
    <View>
      <TouchableOpacity onPress={ onPress }>
        <View style={flag ? styles.activeTabBox : styles.statusBox}>
          <Text style={flag ? styles.activeTabText : styles.statusText}>
            { nameTab }
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default DetailTab