
export function  validarFormulario(nome, email, senha, confirmarSenha) {
    const criteriosSenha = [
        /[a-z]/,
        /[A-Z]/,
        /\d/,
        /[\W_]/
    ];

    if (!nome || !email || !senha || !confirmarSenha) {
        return { valido: false, mensagem: 'Todos os campos são obrigatorios.'};
    }

    if (senha.length < 8) {
        return {valido: false, mensagem: 'Asenha deve conter no minimo 8 caracteres'}
    }

    for (const criterio of criteriosSenha) {
        if (!criterio.test(senha)) {
            return {valido: false, mensagem: 'Asenha deve conter pelomenos uma letra minúscula, uma maiúscula, um numero e um caractere especial.'};
        }
    }

    if (senha !== confirmarSenha) {
        return {valido: false, mensagem: 'As senhas não coincidem'}
    };

    return { valido: true, mensagem: ''};

}