import { Button, Form, Input, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { useHideMenu } from '../Hooks/useHideMenu';
import { useContext } from 'react';
import { UiContext } from '../Context/UiContext';


const { Title, Text } = Typography

export const LoginPage = () => {

    useHideMenu( false )

    const { login } = useContext( UiContext )
    const history = useNavigate()

    const onFinish = ({ Agente, Escritorio }) => {
       
        localStorage.setItem('agente', Agente)
        localStorage.setItem('escritorio', Escritorio)
        localStorage.setItem('auth', 'authenticated')
        login()
        history('/home/desk')
      };

      const onFinishFailed = (errorInfo) => {
      };

     
    return (
        <> 
        <Title style={{ textAlign:'center' }} level={1}>Ingresar</Title>
        <Text>Ingrese su nombre y numero de escritorio</Text>
        <Divider/>
            <Form
                style={{
                    maxWidth: 600,
                }}
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Nombre del agente"
                    name="Agente"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
            
                <Form.Item
                    label="Escritorio"
                    name="Escritorio"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <InputNumber min={1} max={99} style={{ width:"100%" }}/>
                </Form.Item>
            
                <Form.Item
                    wrapperCol={{
                    offset: 4,
                    span: 16,
                    }}
                >
                    <Button style={{
                        width: '100%' , height: '2.5rem', fontWeight: 'bold',
                        fontSize: "16px"
                        }} 
                    type="primary" htmlType="submit">
                        <SaveOutlined/>
                    Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
      );
      
}