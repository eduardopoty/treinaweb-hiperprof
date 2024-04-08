import { ProfessorInterface } from "@data/@types/professor";
import { Router } from "next/router";
import { useEffect, useState } from "react";

export default function useDetalheProfessor() {
    const [professor, setProfessor] = useState<ProfessorInterface>(); 

    useEffect(() => {
        const data = sessionStorage.getItem("Hiperprof_professor");
        
        if (data) {
            setProfessor(JSON.parse(data));

        } else {
            Router.home.push(router);
        }

        return () => {
            sessionStorage.removeItem('hiperprof_professor');
        };

    }, [router]);

    return { professor };


}