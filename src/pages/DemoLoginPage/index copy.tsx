import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../components/common/InputField";
import styles from "../../styles/pages/DemoLogin.module.scss";

// Ícones (substitua pelos seus próprios componentes de ícone)
const SearchIcon = () => <span>🔍</span>;
const ErrorIcon = () => <span>❌</span>;
const SuccessIcon = () => <span>✅</span>;

const DemoPage: React.FC = () => {
  const [textValue, setTextValue] = useState("Valor preenchido");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [errorValue, setErrorValue] = useState("Valor inválido");
  const [successValue, setSuccessValue] = useState("Valor válido");
  const [rtlValue, setRtlValue] = useState("");

  return (
    <div className={styles.demoContainer}>
      <header className={styles.header}>
        <h1>Design System - Componente InputField</h1>
        <Link to="/" className={styles.backLink}>
          ← Voltar
        </Link>
      </header>

      <div className={styles.grid}>
        {/* Estado padrão */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Estado Padrão</h2>
          <InputField
            id="default-input"
            label="Campo padrão"
            placeholder="Digite algo..."
          />
        </section>

        {/* Estado preenchido */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Estado Preenchido</h2>
          <InputField
            id="filled-input"
            label="Campo preenchido"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </section>

        {/* Com prefixo */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Com Prefixo</h2>
          <InputField
            id="prefix-input"
            label="Campo com prefixo"
            prefix="R$"
            placeholder="0,00"
          />
        </section>

        {/* Com sufixo */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Com Sufixo</h2>
          <InputField
            id="suffix-input"
            label="Campo com sufixo"
            suffix="kg"
            type="number"
          />
        </section>

        {/* Campo de busca */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Campo de Busca</h2>
          <InputField
            id="search-input"
            label="Pesquisar"
            type="search"
            prefix={<SearchIcon />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </section>

        {/* Estado de erro */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Estado de Erro</h2>
          <InputField
            id="error-input"
            label="Campo com erro"
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error="Mensagem de erro"
            suffix={<ErrorIcon />}
          />
        </section>

        {/* Estado de sucesso */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Estado de Sucesso</h2>
          <InputField
            id="success-input"
            label="Campo válido"
            value={successValue}
            onChange={(e) => setSuccessValue(e.target.value)}
            success="Mensagem de sucesso"
            suffix={<SuccessIcon />}
          />
        </section>

        {/* Campo desabilitado */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Campo Desabilitado</h2>
          <InputField
            id="disabled-input"
            label="Campo desabilitado"
            value="Não editável"
            disabled
          />
        </section>

        {/* Campo obrigatório */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Campo Obrigatório</h2>
          <InputField
            id="required-input"
            label="Campo obrigatório"
            required
            helperText="Este campo é obrigatório"
          />
        </section>

        {/* RTL (Árabe/Hebreu) */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Suporte RTL</h2>
          <InputField
            id="rtl-input"
            label="اسم المستخدم"
            dir="rtl"
            value={rtlValue}
            onChange={(e) => setRtlValue(e.target.value)}
            prefix="👤"
          />
        </section>

        {/* Exemplo de formulário */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exemplo de Formulário</h2>
          <form className={styles.form}>
            <InputField
              id="form-email"
              label="E-mail"
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required
              helperText="Digite seu e-mail"
            />

            <InputField
              id="form-password"
              label="Senha"
              type="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              required
              helperText="Mínimo 8 caracteres"
            />

            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default DemoPage;
