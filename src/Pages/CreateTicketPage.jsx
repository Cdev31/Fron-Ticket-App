import { Row, Col, Typography, Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"

const { Text, Title } = Typography


export const CreateTicketPage = ()=>{

    const onNewTicket = ()=>{}

    return (
        <>
          <Row>
              <Col span={14} offset={6} align="center">
                <Title>Presione el boton para un nuevo ticket</Title>
                <Button
                  type="primary"
                  shape="round"
                  icon={ <DownloadOutlined/> }
                  onClick={onNewTicket}
                >
                    Nuevo Ticket
                </Button>
              </Col>
          </Row>
          <Row style={{ marginTop: 100 }} >
            <Col span={ 14 } offset={ 6 } align="center" >
                <Text level={2}>
                    Su numero:
                </Text>
                <br/>
                <Text
                  type="success"
                  style={{  fontSize: 55 }}
                >55</Text>
            </Col>
          </Row>
        </>
    )
}