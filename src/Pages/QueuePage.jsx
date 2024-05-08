import { Typography, Row, Col, List, Card, Tag, Divider } from "antd"
import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../Context/SocketContext"
import { getLast } from "../Helpers/getLast"

const { Title, Text } = Typography


export const QueuePage = ()=>{

  const { socket } = useContext( SocketContext )
  const [ ticket, setTicket ] = useState([])

  useEffect(()=>{

    socket.on('assigned-ticket', ( asigned )=>{
      setTicket( asigned )
    })

    return ()=>{
      socket.off('assigned-ticket')
    }

  },[ socket ])
 
    useEffect(()=>{
      getLast().then( data => setTicket( data ) )
    }, [])

    return (
        <>
          <Title>Atendiendo al cliente</Title>
          <Row>
              <Col span={ 12 }>
                <List
                   dataSource={ ticket.slice(0,3) }
                   renderItem={ item => (
                      <List.Item>
                         <Card
                          style={{ width: 300, marginTop: 16 }}
                          actions={[
                            <Tag color="volcano" >{ item.agent }</Tag>,
                            <Tag color="magenta">Escritorio: { item.desk }</Tag>
                          ]}
                         >
                            <Title>No. { item.number }</Title>
                         </Card>
                      </List.Item>
                   )}
                />
              </Col>

              <Col span={ 12 }>
                <Divider>Historial</Divider>
                <List
                 dataSource={ ticket.slice(3) }
                 renderItem={ item => (
                    <List.Item>
                        <List.Item.Meta
                      title={`Ticket No. ${ item.number }`}
                      description={
                        <>
                          <Text type="secondary" >En el escritorio: </Text>
                          <Tag color="magenta" >{ item.desk }</Tag>
                          <Text type="secondary" >Agente:</Text>
                          <Tag color="volcano" >{ item.agent }</Tag>
                        </>
                      }
                    />
                    </List.Item>
                 )}
                />
              </Col>
          </Row>
        </>
    )
}