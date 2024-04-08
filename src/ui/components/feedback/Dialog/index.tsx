import { 
    Dialog as MuiDialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Button, 
} from "@mui/material";

interface DialogProps {
    isOpen?: boolean;
    onClose?: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
    title?: string;
}

export default function Dialog({ 
    isOpen = true, 
    onClose,
    onCancel,
    onConfirm,
    title,
    children
}: PropsWithChildren<DialogProps>) {
    return (
        <MuiDialog open={isOpen} onClose={onClose}>
            <DialogTitle color={"primary"} fontSize={"small"} textAlign={"center"}>
                {title}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                {onCancel && (
                    <Button variant="outlined" onClick={onCancel} sx={{ py: 2, px: 3 }}>
                        Cancelar
                    </Button>
                )}
                <Button 
                    variant="contained" 
                    type="submit"
                    onclick={onConfirm} 
                    fullWidth={onCancel == undefined}
                >
                    Confirmar
                </Button>
            </DialogActions>
        </MuiDialog>
    )
}