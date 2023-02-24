import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
  const [team, setTeam] = useState('time A')
  const [players, setPlayers] = useState([])

  return (
    <Container>
      <Header showBackButton/>
      <Highlight title="Nome da turama" subtitle="adicione a galera e separe os times" />
      
      <Form>
      <Input
        placeholder="Nome da pessoa"
        autoCorrect={false}
        />

      <ButtonIcon
        icon="add"
      />
      </Form>

      <HeaderList>
        <FlatList
          data={['time A', 'time B']}
          keyExtractor={item => item}
          renderItem={({ item}) => (
            <Filter
            title={item}
            isActive={item === team}
            onPress={() => setTeam(item)}
            />
            )}
            horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

    </Container>
  )
}