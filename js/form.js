import{initMap,initMenu}from"./utils.js";import{initValidation}from"./validation.js";initMenu(),initMap();const form=document.querySelector("#program"),inputsElements=form.querySelectorAll(".form__input-text, .form__input-checkbox, .form__input-radio"),textElements=form.querySelectorAll(".form__error-text, .form__error-toggle"),button=form.querySelector(".form__button");initValidation({form:form,inputsElements:inputsElements,textElements:textElements,button:button});