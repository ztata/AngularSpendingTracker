import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ITransaction } from './Interfaces/ITransaction';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalFunds: number = 0;
  transactionRecord: any = [];
  currentTransaction: ITransaction | any;
  displayTransactionPanel: boolean = false;
  buttonText: string = "Enter a Transaction";
  transactions = [
    {id: "income", name: "Income"},
    {id: "expense", name: "Expense"}
  ]


transactionForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  type: new FormControl(''),
  amount: new FormControl('', [Validators.required]),
  date: new FormControl('')
})

  addTransaction(){
    console.log("form submitted")
    console.log(this.transactionForm.value);
    if(this.transactionForm.value.type==="income"){
      this.totalFunds += this.transactionForm.value.amount;
    }
    else{
      this.totalFunds -= this.transactionForm.value.amount;
    }

    this.updateTransactionRecord();
    this.transactionForm.reset();
  }

  updateTransactionRecord(){
    this.currentTransaction = {
      name: this.transactionForm.value.name,
      date: this.transactionForm.value.date,
      type: this.transactionForm.value.type,
      amount: this.transactionForm.value.amount
    };
    this.transactionRecord.push(this.currentTransaction);
    }

    displayTransaction(){
      this.displayTransactionPanel = !this.displayTransactionPanel;
      if(this.displayTransactionPanel === true){
        this.buttonText = "I'm All Set!";
      }
      else{
        this.buttonText = "Enter a Transaction";
      }
    }
 
 
 
  }

 




