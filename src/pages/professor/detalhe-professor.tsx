import PageTitle from "@components/data-display/PageTitle";
import { Button, Container, Typography } from "@mui/material";
import { BoxDescription, BoxImage, BoxCardProfessor } from "@styles/pages/professor/detalhe-professor.styles";

export default function DetalheProfessorPage() {
    return (
        <Container>
            <PageTitle 
                title="Detalhes do professor"
                subtitle="Veja os detalhes do professor e verifique se ele é o ideal para você se candidatar a uma aula"
            />
            <BoxCardProfessor>
                <BoxImage foto={ "https://github.com/eduardopoty.png" } />
                <BoxDescription>
                    <div className="box_esquerda">
                        <Typography variant="h6">Nome</Typography>
                        <Typography  sx={{ my: 2 }} className="descricao" paragraph variant="body2">
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. 
                            Repellat ipsa impedit, distinctio debitis tenetur 
                            consequatur? Tempora numquam ab harum voluptas 
                            voluptatum praesentium voluptates eius. 
                            Odit delectus molestiae beatae quisquam quaerat?
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. 
                            Repellat ipsa impedit, distinctio debitis tenetur 
                            consequatur? Tempora numquam ab harum voluptas 
                            voluptatum praesentium voluptates eius. 
                            Odit delectus molestiae beatae quisquam quaerat?
                        </Typography>
                    </div>
                    <div className="box_direita">
                        <Typography variant="body2" sx={{ my: 2 }}>PREÇO HORA/AULA</Typography>
                        <Typography variant="h4" paragraph >25/10/2022</Typography>
                        <Button variant="outlined" color="inherit" onClick={() => {}}>
                            Contratar
                        </Button>
                    </div>
                </BoxDescription>
            </BoxCardProfessor>
        </Container>
    )
}