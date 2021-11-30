import * as React from 'react';
import { FunctionComponent } from 'react';
import { Text, View } from '../components/Themed';
import { FlatList, Image, StyleSheet } from 'react-native';

const testData: AssetProps[] = [
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0x0000000000000000000000000000000000000000/logo.png',
        name: 'Ethereum',
        balance: 124.3
    },
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7/logo.png',
        name: 'Tether USDT',
        balance: 2200
    },
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3/logo.png',
        name: 'Rubic',
        balance: 2221313
    },
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0x0000000000000000000000000000000000000000/logo.png',
        name: 'Ethereum',
        balance: 124.3
    },
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7/logo.png',
        name: 'Tether USDT',
        balance: 2200
    },
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3/logo.png',
        name: 'Rubic',
        balance: 2221313
    },
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0x0000000000000000000000000000000000000000/logo.png',
        name: 'Ethereum',
        balance: 124.3
    },
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7/logo.png',
        name: 'Tether USDT',
        balance: 2200
    },
    {
        imgUri: 'https://api.rubic.exchange/assets/ethereum/0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3/logo.png',
        name: 'Rubic',
        balance: 2221313
    },
]

export const AssetsList = () => {
    const renderItem = (props: AssetProps) => {
        console.log(props);
        return <Asset imgUri={props.imgUri} name={props.name} balance={props.balance}/>
    };

    return (
        <FlatList
            data={testData}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.name}
            style={{backgroundColor: 'transparent'}}
        />
    );
}

interface AssetProps {
    imgUri: string;
    name: string;
    balance: number;
}

const Asset: FunctionComponent<AssetProps> = (props) => {
    return (
        <View style={styles.asset}>
            <Image source={{uri: props.imgUri}} style={{ width: 50, height: 50}} />
            <Text style={styles.assetName}>{props.name}</Text>
            <Text style={styles.assetBalance}>{props.balance}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    asset: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'transparent'
    },
    assetName: {
        marginRight: 10,
        marginLeft: 20,
        fontSize: 20,
        flex: 1
    },
    assetBalance: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20
    }
});
