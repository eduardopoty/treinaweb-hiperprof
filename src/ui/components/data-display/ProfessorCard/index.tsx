import { Button, Typography } from "@mui/material";
import { 
    BoxAvatarStyled,
    BoxCardStyled,
    BoxContainsStyled,
    ImageStyled,
} from "./styles";

export default function ProfessorCard() {
    return (
        <BoxCardStyled>
            <BoxAvatarStyled>
                <ImageStyled src="https://github.com/eduardopoty.png" alt="" />
            </BoxAvatarStyled>
            <BoxContainsStyled>
                <div>
                    <Typography variant="h6" className="descricao" paragraph>
                        Nome
                    </Typography>
                    <Typography 
                        sx={{ display: 'flex', alignItems: "center" }} 
                        className="descricao"
                        variant="body2" 
                        paragraph
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus dolores, consequatur ipsa hic consectetur reprehenderit sit laborum voluptates nesciunt ducimus ea laudantium suscipit sed officiis cupiditate maiores itaque et.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quo accusantium suscipit fugiat distinctio. Placeat ex eum non! Quaerat tempore dolorem porro commodi amet cumque perferendis quo autem quae ipsa?
                    </Typography>
                </div>
                <Button 
                    variant="outlined" 
                    color="inherit" 
                    onClick={() => {}}
                >
                    Ver detalhes
                </Button>
            </BoxContainsStyled>
        </BoxCardStyled>
    );
}