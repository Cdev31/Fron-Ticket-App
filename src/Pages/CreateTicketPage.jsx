import { Row, Col, Typography, Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"
import { useHideMenu } from "../Hooks/useHideMenu"
import { useContext, useState } from "react"
import { SocketContext } from "../Context/SocketContext"

const { Text, Title } = Typography


export const CreateTicketPage = ()=>{

    useHideMenu( true )
    const { socket } = useContext( SocketContext )
    const [ ticket, setTicket ] = useState(null)

    const onNewTicket = ()=>{
      socket.emit('new-ticket', null, ( ticket )=>{
        setTicket(ticket)
      })
    }

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
          {
            ticket && (
              <Row style={{ marginTop: 100 }} >
                <Col span={ 14 } offset={ 6 } align="center" >
                    <Text level={2}>
                        Su numero:
                    </Text>
                    <br/>
                    <Text
                      type="success"
                      style={{  fontSize: 55 }}
                    >{ ticket.number }</Text>
                </Col>
              </Row>
            )
          }
        </>
    )
}