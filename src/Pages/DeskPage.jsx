import { Row, Col, Typography, Button, Divider } from "antd"
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

export const DeskPage = ()=>{
    const exit = ()=>{}
    const onNextTicket = ()=>{}
    return (
        <>
        <Row>
            <Col span={20}>
                <Title level={2} >Kalet</Title>
                <Text>Usted esta trabajando en el escritorio: </Text>
                <Text type="success">5</Text>
            </Col>
            <Col span={4} align="right">
              <Button
              type="primary"
              shape="round"
              danger
              style={{ fontWeight:'bold' }}
              onClick={exit}
              >
                <CloseCircleOutlined/>
                Salir
              </Button>
            </Col>
        </Row>
        <Divider/>
        
        <Row>
            <Col>
              <Text>Esta atendiendo el ticket numero:</Text>
              <Text
              type="primary"
              danger
              style={{ fontSize: 30 }}
              >55</Text>
            </Col>
        </Row>

        <Row>
            <Col offset={18} span={ 6 } align="right" >
              <Button
               onClick={onNextTicket}
               shape="round"
               type="primary"
              >
                <RightOutlined/>
                Siguiente
              </Button>
            </Col>
        </Row>
        </>
    )
}