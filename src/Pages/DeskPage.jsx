import { Row, Col, Typography, Button, Divider } from "antd"
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons"
import { useHideMenu } from "../Hooks/useHideMenu"
import { useContext, useState } from "react"
import { UiContext } from "../Context/UiContext"
import { SocketContext } from "../Context/SocketContext"
import { getUsersStorage } from "../Helpers/getUsersStorage"

const { Title, Text } = Typography

export const DeskPage = ()=>{

    useHideMenu( false )

    const [ user ] = useState( getUsersStorage() )
    const { logout } = useContext( UiContext )
    const { socket } = useContext( SocketContext )
    const [ ticket, setTicket ] = useState(null)
    const exit = ()=>{}

    const onNextTicket = ()=>{
      socket.emit('next-ticket', user, ( ticket )=>{
        setTicket(ticket)
      } )
    }

    return (
        <>
        <Row>
            <Col span={20}>
                <Title level={2} >{ user.agente }</Title>
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
                <CloseCircleOutlined onClick={()=> logout()}/>
                Salir
              </Button>
            </Col>
        </Row>
        <Divider/>
        {
          ticket && (
            <Row>
                <Col>
                  <Text>Esta atendiendo el ticket numero:</Text>
                  <Text
                  type="primary"
                  danger
                  style={{ fontSize: 30 }}
                  >{ticket.number}</Text>
                </Col>
            </Row>
          )
        }
       

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