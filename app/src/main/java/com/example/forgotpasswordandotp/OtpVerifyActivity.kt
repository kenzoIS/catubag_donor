package com.example.forgotpasswordandotp

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class OtpVerifyActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_otp_verify)

        val btnContinue = findViewById<Button>(R.id.btnContinue)
        val box1 = findViewById<EditText>(R.id.otp_box_1)

        btnContinue.setOnClickListener {
            if (box1.text.isNotEmpty()) {
                startActivity(Intent(this, ResetPasswordActivity::class.java))
            } else {
                Toast.makeText(this, "Enter OTP", Toast.LENGTH_SHORT).show()
            }
        }
    }
}