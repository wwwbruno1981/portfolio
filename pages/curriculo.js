import { PaperClipIcon } from '@heroicons/react/solid'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Curriculo() {
  return (
<>
    <Nav />
    <div className="bg-white-400 shadow overflow-hidden sm:rounded-lg">
      <div className=" text-center px-4 py-5 sm:px-6">
        <h3 className="text-3xl leading-6 font-medium text-gray-900">Bruno da Conceição</h3>
        <p className="text-center text-2xl mt-1 text-sm text-gray-500">Residente em: Nova Aurora - Belford Roxo - RJ</p>
        <p className="text-center text-2xl mt-1  text-sm text-gray-500">Contato wwwbrruno@gmail.com - (21) 99255 6460 p/recados (21) 99423 1066</p>
     
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Objetivo:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Estou em busca de uma oportunidade em TI, para eu custear meus estudos na área de Data Science e afins.
</dd>
          </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Natural de:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">São João de Meriti - RJ</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Data de nascimento: </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">08 de Outubro de 1981</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Estado Civil:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Casado c/ 01 Filho</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Escolaridade:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Ensino Superior Completo – Gestão de RH – ESTÁCIO DE SÁ</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cursos:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Técnico em Transações Imobiliária – SINDIMOVEIS-RJ</dd> 
          
           <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Técnico em Segurança Privada - FORBIN</dd>
            
            <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Informática pacote Office (AVANÇADO)  DATA MASTER</dd>
            
            <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Linguagem de programação Visual Basic – FAETEC</dd>
            
            <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Instalador de Sistema Eletrônico de Segurança CFTV e Alarmes - UNICARIOOCA</dd>
           
            <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Auxiliar Administrativo - UNIABEU</dd>
            
            <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Assistente de Contabilidade – SENAC</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Conhecimentos Extracurriculares:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Html5, Css3, Javascript-ES6, ReactJS, React Native. 
              Básico em Inglês Técnico, GitHub, NodeJS e Banco de dados 
              relacional (PostgreSQL ) 
              e não relacional (MongoDB )
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Últimas Experiências Profissional:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Autônomo: Corretor de Imóveis</dd>
            <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Comércio Varejista (Construção): Auxiliar administrativo</dd>
            <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Segurança Privada: Vigilante  ( TJRJ – PGT)</dd>
            <dt className="text-sm font-medium text-gray-500">.</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Comércio Varejista (Alimentícios): Monitoramento de CFTV  e Alarmes</dd>
         
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Perfil</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">Possuo bom relacionamento interpessoal e dedicação às atividades de trabalho.</span>
                  </div>
                 
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div className="text-center pt-5 pb-5">
       <a href="https://drive.google.com/file/d/1L8CFVpwW4bZmf59eUQI7tIglWT18rovh/view?usp=sharing" 
       class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Baixar Curriculo</a>
    </div>            
    <Footer />
    </>
  )
}