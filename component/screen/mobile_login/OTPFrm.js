import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../Button';
import {OTP} from 'react-native-otp-form';




const OTPFrm = () => {

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 10,
            }}>
                <Text style={styles.header}>ยืนยันรหัส 6 หลัก</Text>
                <Text style={styles.text}>โปรดกรอกรหัสยืนยัน 6 หลัก ที่ส่งไปยังหมายเลข</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 30, height: 20, marginTop: 10, marginLeft: 10, fontFamily: 'Prompt-Regular' }} source={require('../../../assets/images/Flag-icon-TH.png')} />
                    <Text style={{ marginTop: 7, fontSize: 18, fontFamily: 'Prompt-Bold', color: '#1E90FF' }}> +66804313345</Text>
                </View>

                <OTP
                    codeCount={6}
                    containerStyle={{ marginTop: 30}}
                    otpStyles={{ backgroundColor: 'white' }}
                />

                <Text style={{ marginTop: 30 }}></Text>
                <Button style={{ marginTop: 30 }} title="เข้าสู่ระบบ" color='#FFC300' />

                <View style={{ flexDirection: 'row' , marginTop: 20, alignSelf: 'center' }}>
                    <Text style={[styles.label]}>ยังไม่ได้รับหรัสผ่านใช่ไหม</Text>
                    <Text style={[styles.label,{color: '#1E90FF'}]}>  ขอรหัสผ่านใหม่</Text>
                </View>

                <Text style={[styles.label,{marginTop: 250}]}>เมื่อเข้าสู่ระบบคุณได้ยอมรับเงื่อนไขและข้อตกลงและนโยบายความเป็นส่วนตัวของ ปลาวาฬ แล้ว</Text>
            </ScrollView>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        fontSize: 24,
        padding: 10,
        fontFamily: 'Prompt-Bold',
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 20,
        fontFamily: 'Prompt-Regular',
        color: 'grey',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Prompt-Regular',
    }
});

export default OTPFrm;