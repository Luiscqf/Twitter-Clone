import React from 'react';
import Feed from '../Feed';
import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage, 
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>
          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Luis Claudio</h1>
              <h2>@Claudio10luis</h2>
              <p>Carinha que mora logo ali</p>
              <ul>
                <li>
                    <LocationIcon />
                    Rio de Janeiro, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido em 22 de Maio de 1999
                </li>
              </ul>
            <Followage>
                <span>
                    Seguindo <strong>269</strong>
                </span>
                <span>
                <strong>138 </strong> Seguidores
                </span>
            </Followage>
          </ProfileData>
          <Feed />
      </Container>
  )
}

export default ProfilePage;